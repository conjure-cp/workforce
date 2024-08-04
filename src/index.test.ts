import { describe, it, expect } from "vitest";
import type { Shift, Location, Person, Task, Skill } from "$lib/types";
import * as devalue from "devalue";
import {
  generateLocation,
  generatePerson,
  generateShift,
  generateSkill,
  generateTask
} from "$lib/testing.ts";

describe("Serialization", () => {
  it("should serialize a location", () => {
    const location: Location = generateLocation();

    const serialized = devalue.stringify(location);
    console.log(serialized);

    expect(serialized).toBeDefined();

    const deserialized = devalue.parse(serialized);
    console.log(deserialized);

    expect(deserialized).toBeDefined();
    expect(deserialized).toBeTypeOf("object");
    expect(deserialized).toEqual(location);
  });

  it("should serialize a person", () => {
    const person: Person = generatePerson();

    const serialized = devalue.stringify(person);
    console.log(serialized);

    expect(serialized).toBeDefined();

    const deserialized = devalue.parse(serialized);
    console.log(deserialized);

    expect(deserialized).toBeDefined();
    expect(deserialized).toBeTypeOf("object");
    expect(deserialized).toEqual(person);
  });

  it("should serialize a task", () => {
    const task: Task = generateTask();

    const serialized = devalue.stringify(task);
    console.log(serialized);

    expect(serialized).toBeDefined();

    const deserialized = devalue.parse(serialized);
    console.log(deserialized);

    expect(deserialized).toBeDefined();
    expect(deserialized).toBeTypeOf("object");
    expect(deserialized).toEqual(task);
  });

  it("should serialize a shift", () => {
    const shift: Shift = generateShift();

    const serialized = devalue.stringify(shift);
    console.log(serialized);

    expect(serialized).toBeDefined();

    const deserialized = devalue.parse(serialized);
    console.log(deserialized);

    expect(deserialized).toBeDefined();
    expect(deserialized).toBeTypeOf("object");
    expect(deserialized).toEqual(shift);
  });

  it("should serialize a skill", () => {
    const skill: Skill = generateSkill();

    const serialized = devalue.stringify(skill);
    console.log(serialized);

    expect(serialized).toBeDefined();

    const deserialized = devalue.parse(serialized);
    console.log(deserialized);

    expect(deserialized).toBeDefined();
    expect(deserialized).toBeTypeOf("object");
    expect(deserialized).toEqual(skill);
  });
});
