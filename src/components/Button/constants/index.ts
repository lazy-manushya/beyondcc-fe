import { ButtonSize, ButtonVariant, ColorVariant } from "../Button.types";

export const BUTTON_VARAINT_CONFIG: {
  [key in ColorVariant]: {
    [key in ButtonVariant]: {
      color: string;
      bgColor: string;
      borderColor: string;
    };
  };
} = {
  primary: {
    primary: {
      color: "#fff",
      bgColor: "var(--clr-primary)",
      borderColor: "var(--clr-primary)",
    },
    secondary: {
      color: "var(--clr-primary)",
      bgColor: "transparent",
      borderColor: "var(--clr-primary)",
    },
    ghost: {
      color: "var(--clr-primary)",
      bgColor: "transparent",
      borderColor: "transparent",
    },
  },
  white: {
    primary: {
      color: "var(--clr-primary)",
      bgColor: "#fff",
      borderColor: "var(--clr-primary)",
    },
    secondary: {
      color: "#fff",
      bgColor: "transparent",
      borderColor: "#fff",
    },
    ghost: {
      color: "#fff",
      bgColor: "transparent",
      borderColor: "transparent",
    },
  },
  danger: {
    primary: {
      color: "var(--clr-error)",
      bgColor: "#fff",
      borderColor: "var(--clr-error)",
    },
    secondary: {
      color: "var(--clr-error)",
      bgColor: "transparent",
      borderColor: "var(--clr-error)",
    },
    ghost: {
      color: "var(--clr-error)",
      bgColor: "transparent",
      borderColor: "transparent",
    },
  },
};

export const BUTTON_SIZE_CONFIG: {
  [key in ButtonSize]: {
    padding: string;
    fontSize: string;
  };
} = {
  sm: {
    padding: "6px",
    fontSize: "14px",
  },

  md: {
    padding: "8px",
    fontSize: "16px",
  },

  lg: {
    padding: "12px",
    fontSize: "20px",
  },
};

export const DEFAULT_BUTTON_VARIANT: ButtonVariant = "primary";

export const DEFAULT_COLOR_VARIANT: ColorVariant = "primary";

export const DEFAULT_BUTTON_SIZE: ButtonSize = "md";
