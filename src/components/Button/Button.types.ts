export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ColorVariant = "primary" | "white" | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface IStyledButtonProps {
  variant: ButtonVariant;
  colorVariant: ColorVariant;
  size: ButtonSize;
}

export interface IButtonProps extends React.ButtonHTMLAttributes<Element> {
  ref?: any;
  link?: string;
  variant?: ButtonVariant;
  onPressEnd?: any;
  useReactAria?: boolean;
  colorVariant?: ColorVariant;
  size?: ButtonSize;
}
