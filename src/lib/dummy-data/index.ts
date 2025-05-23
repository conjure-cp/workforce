import { State } from "$lib/model";
import { ASelectProperty } from "$lib/model/core/property";
import { faker } from "@faker-js/faker";
import { generateLocation, generateLocations, generateTrueLocation } from "./location";
import { generatePeople, generatePerson } from "./person";
import { generateShift, generateShifts } from "./shift";
import { generateTask, generateTasks } from "./task";
import { v4 as uuidv4 } from "uuid";

export const dummyState = new State("dummy");
populateState(dummyState);

export function populateState(state: State): void {
  state.clear();
  populateProperties(state);
  state.putAll(generateLocations(state, 5, 10));
  state.putAll(generateTasks(state, 5, 10));
  state.putAll(generateShifts(state, 2, 3));
  state.putAll(generatePeople(state, 5, 10));
}

function populateProperties(state: State): void {
  state.properties.update((props) =>
    props.map((p) => {
      if (p instanceof ASelectProperty) {
        p.options = Array.from({ length: 5 }, (_, i) => ({
          name: `Option ${i + 1}`,
          icon: p.icon?.with({ color: faker.color.rgb() }),
          uuid: uuidv4(),
        }));
      }
      return p;
    }),
  );
}

export { generateLocation, generatePerson, generateShift, generateTask, generateTrueLocation };
