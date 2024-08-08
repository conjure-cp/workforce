import { type Constraint, Type } from "$lib/types";
import { type ConstraintOperand, ConstraintType, getOperands } from "$lib/types/constraints.ts";

const OPERAND_ICONS: Map<Type, string> = new Map([
  [Type.Person, "lucide:user-round-x"],
  [Type.Location, "lucide:map-pin-x"],
  [Type.Task, "lucide:clipboard-x"]
]);

const CONSTRAINT_ICONS: Map<ConstraintType, string> = new Map([
  [ConstraintType.NoPerson, "lucide:user-round-x"],
  [ConstraintType.NoLocation, "lucide:map-pin-x"],
  [ConstraintType.NoTask, "lucide:clipboard-x"]
]);

export function getIcon(
  constraint: Constraint | undefined,
  forOperand: ConstraintOperand | undefined = undefined
): string {
  if (constraint === undefined) {
    return "lucide:drafting-compass";
  }

  if (forOperand !== undefined) {
    const opSet = new Set(getOperands(constraint));
    opSet.delete(forOperand);

    if (opSet.size === 1) {
      const opType = Array.from(opSet)[0].type;
      const icon = OPERAND_ICONS.get(opType);
      if (icon !== undefined) {
        return icon;
      }
    }
  }

  const constraintIcon = CONSTRAINT_ICONS.get(constraint.type);
  if (constraintIcon !== undefined) {
    return constraintIcon;
  }
  return "lucide:drafting-compass";
}
