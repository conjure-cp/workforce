import { displaySchema, type Display } from "$lib/ui";
import { varyColor } from "$lib/utils/misc";
import { get as _get, derived, writable, type Writable } from "svelte/store";
import type { JsonObject, JsonValue } from "type-fest";
import { v4 as uuidv4 } from "uuid";
import { z, type SafeParseReturnType } from "zod";
import { Displayable } from "./displayable";
import { displayFromJSON, displayToJSON, uuidOf, type IdOr } from "./misc";
import type { State } from "./state";

const types = z.enum(["single", "multiple", "text"]);
const selectOptionSchema = z.object({ ...displaySchema.shape, uuid: z.string() });

export type PropertyType = z.infer<typeof types>;
export type SelectOption = z.infer<typeof selectOptionSchema>;

interface PropertyProps extends Display {
  type?: PropertyType;
}

export interface SelectPropertyProps extends PropertyProps {
  options: SelectOption[];
}

export abstract class Property<T> extends Displayable {
  abstract readonly type: PropertyType;
  abstract readonly schema: z.ZodType<T, z.ZodTypeDef, unknown>;
  // abstract parse(value: unknown): SafeParseReturnType<unknown, T>;
  abstract serialize(value: T): JsonValue;

  static propsFromJSON(json: JsonObject): PropertyProps {
    return { ...displayFromJSON(json), type: types.parse(json.type) };
  }

  /**
   * Create a concrete Property instance from JSON data.
   * @warning This method must NEVER be called by subclasses (e.g. via `super`) to avoid infinite recursion.
              It is meant as a "factory" that calls their respective deserialisation methods instead.
   * @param json JSON data
   * @param state State to bind the Property instance to.
   * @returns A concrete Property instance (SelectProperty, TextProperty, etc.)
   */
  static fromJSON(json: JsonObject, state: State) {
    const type = types.parse(json.type);
    switch (type) {
      case "single":
        return SelectProperty.fromJSON(json, state);
      case "multiple":
        return MultiSelectProperty.fromJSON(json, state);
      case "text":
        return TextProperty.fromJSON(json, state);
    }
  }

  parse(value: unknown): SafeParseReturnType<unknown, T> {
    return this.schema.safeParse(value);
  }

  toJSON(): JsonObject {
    return { ...super.toJSON(), type: this.type };
  }

  copy(): Property<T> {
    return Property.fromJSON(this.toJSON(), this.state) as unknown as Property<T>;
  }
}

export abstract class ASelectProperty<T> extends Property<T> {
  protected _options: Writable<Map<string, SelectOption>>;

  constructor(props: SelectPropertyProps, state: State, uuid?: string) {
    super(props, state, uuid);
    this._options = writable(new Map(props.options.map((option) => [option.uuid, option])));
  }

  static propsFromJSON(json: JsonObject): SelectPropertyProps {
    return {
      ...super.propsFromJSON(json),
      options: z.array(selectOptionSchema).parse(json.options),
    };
  }

  mkOption(): SelectOption {
    const idx = this.options.length + 1;
    return {
      name: this.name + " - " + idx,
      uuid: uuidv4(),
      icon: this.icon?.color
        ? this.icon.with({ color: varyColor(this.icon.color, { lightness: (idx * 5 - 25) % 50 }) })
        : this.icon,
    };
  }

  toJSON(): JsonObject {
    return { ...super.toJSON(), options: this.options.map(ASelectProperty.optionJSON) };
  }

  get options(): SelectOption[] {
    return _get(this.rOptions);
  }

  set options(options: SelectOption[]) {
    this.rOptions.set(options);
  }

  hasOption(opt: IdOr<SelectOption>) {
    return _get(this._options).has(uuidOf(opt));
  }

  getOption(opt: IdOr<SelectOption>) {
    return _get(this._options).get(uuidOf(opt));
  }

  putOption(option: SelectOption) {
    this._options.update((options) => {
      options.set(option.uuid, option);
      return options;
    });
  }

  deleteOption(opt: IdOr<SelectOption>) {
    this._options.update((options) => {
      options.delete(uuidOf(opt));
      return options;
    });
  }

  get rOptions(): Writable<SelectOption[]> {
    const readable = derived(this._options, (map) => Array.from(map.values()));
    const set = (options: SelectOption[]) => {
      this._options.set(new Map(options.map((option) => [option.uuid, option])));
    };
    const update = (fn: (options: SelectOption[]) => SelectOption[]) => {
      const current = _get(readable);
      set(fn(current));
    };
    return { subscribe: readable.subscribe, set, update };
  }

  protected get optSchema() {
    return selectOptionSchema
      .refine((value) => this.hasOption(value), "Invalid option")
      .or(
        z
          .string()
          .refine((value) => this.hasOption(value), "Invalid option")
          .transform((value) => this.getOption(value) as SelectOption),
      );
  }

  protected static optionFromJSON(json: JsonObject): SelectOption {
    return { ...displayFromJSON(json), uuid: z.string().parse(json.uuid) };
  }

  protected static optionJSON(option: SelectOption): JsonObject {
    console.log("optionJSON", option);
    return { ...displayToJSON(option), uuid: option.uuid };
  }
}

export class SelectProperty extends ASelectProperty<SelectOption> {
  type: PropertyType = "single";
  schema = z.union([
    this.optSchema,
    z
      .array(this.optSchema)
      .nonempty()
      .transform((a) => a[0]),
  ]);

  serialize(value: SelectOption): JsonValue {
    console.log("SelectProperty.serialize", value);
    return value.uuid;
  }

  static fromJSON(json: JsonObject, state: State): SelectProperty {
    return new SelectProperty(
      { ...ASelectProperty.propsFromJSON(json) },
      state,
      z.optional(z.string()).parse(json.uuid),
    );
  }

  copy(): SelectProperty {
    return new SelectProperty({ ...super.copy(), options: this.options }, this.state, this.uuid);
  }

  asMultiSelect(uuid?: string): MultiSelectProperty {
    return new MultiSelectProperty(this.copy(), this.state, uuid || this.uuid);
  }
}

export class MultiSelectProperty extends ASelectProperty<SelectOption[]> {
  type: PropertyType = "multiple";
  schema = z.union([
    z
      .array(z.optional(this.optSchema).catch(undefined))
      .transform((a) => a.filter((v) => v !== undefined) as SelectOption[]),
    this.optSchema.transform((v) => (v ? [v] : [])),
  ]);

  serialize(value: SelectOption[]): JsonValue {
    console.log("MultiSelectProperty.serialize", value);
    return value.map(ASelectProperty.optionJSON);
  }

  static fromJSON(json: JsonObject, state: State): MultiSelectProperty {
    return new MultiSelectProperty(
      { ...ASelectProperty.propsFromJSON(json) },
      state,
      z.optional(z.string()).parse(json.uuid),
    );
  }

  copy(): MultiSelectProperty {
    return new MultiSelectProperty(
      { ...super.copy(), options: this.options },
      this.state,
      this.uuid,
    );
  }

  asSingleSelect(uuid?: string): SelectProperty {
    return new SelectProperty(this.copy(), this.state, uuid || this.uuid);
  }
}

export class TextProperty extends Property<string> {
  type: z.infer<typeof types> = "text";
  schema = z.string();

  serialize(value: string): JsonValue {
    return value;
  }

  static fromJSON(json: JsonObject, state: State): TextProperty {
    return new TextProperty(
      { ...super.propsFromJSON(json) },
      state,
      z.optional(z.string()).parse(json.uuid),
    );
  }
}
