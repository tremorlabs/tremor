export type BadgeProportionTypes = {
  paddingX: string;
  paddingY: string;
  fontSize: string;
};

export const badgeProportions: { [char: string]: BadgeProportionTypes } = {
  xs: {
    paddingX: "px-2",
    paddingY: "py-0.5",
    fontSize: "text-xs",
  },
  sm: {
    paddingX: "px-2.5",
    paddingY: "py-0.5",
    fontSize: "text-sm",
  },
  md: {
    paddingX: "px-3",
    paddingY: "py-0.5",
    fontSize: "text-md",
  },
  lg: {
    paddingX: "px-3.5",
    paddingY: "py-0.5",
    fontSize: "text-lg",
  },
  xl: {
    paddingX: "px-4",
    paddingY: "py-1",
    fontSize: "text-xl",
  },
};

export const iconSizes: {
  [size: string]: {
    height: string;
    width: string;
  };
} = {
  xs: {
    height: "h-4",
    width: "w-4",
  },
  sm: {
    height: "h-4",
    width: "w-4",
  },
  md: {
    height: "h-4",
    width: "w-4",
  },
  lg: {
    height: "h-5",
    width: "w-5",
  },
  xl: {
    height: "h-6",
    width: "w-6",
  },
};
