export enum ChipSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl"
}

export enum ChipVariant {
  default = "default",
  outline = "outline",
  primary = "primary",
  destructive = "destructive",
  destructiveOutline = "destructiveOutline",
  color = "color",
  colorSolid = "colorSolid",
  colorOutline = "colorOutline"
}

export const chipClasses = {
  base: "w-max h-fit inline-flex flex-row items-center justify-start gap-2 rounded-full outline-none outline-offset-0 transition-all",
  variants: {
    [ChipVariant.default]:
      "bg-muted text-muted-foreground hover:text-accent-foreground hover:outline-accent-foreground",
    [ChipVariant.outline]:
      "outline-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground hover:outline-primary",
    [ChipVariant.primary]:
      "bg-primary text-primary-foreground hover:bg-primary/90 hover:outline-primary/90",
    [ChipVariant.destructive]: "bg-destructive/10 text-destructive hover:outline-destructive",
    [ChipVariant.destructiveOutline]:
      "bg-destructive/10 text-destructive outline-destructive hover:bg-destructive hover:text-destructive-foreground",
    [ChipVariant.color]: "",
    [ChipVariant.colorOutline]: "",
    [ChipVariant.colorSolid]: ""
  },
  sizes: {
    [ChipSize.sm]: "h-6 text-sm p-0.5",
    [ChipSize.md]: "h-8 text-md p-1",
    [ChipSize.lg]: "h-10 text-lg p-2",
    [ChipSize.xl]: "h-12 text-xl p-3"
  }
};
