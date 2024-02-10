export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ColorVariant = "primary" | "white" | "danger";

export interface IStyledButtonProps {
  $variant: ButtonVariant;
  $colorVariant: ColorVariant;
}

export interface IButtonProps extends React.ButtonHTMLAttributes<Element> {
  ref?: any;
  link?: string;
  variant?: ButtonVariant;
  onPressEnd?: any;
  useReactAria?: boolean;
  colorVariant?: ColorVariant;
  debug?: boolean;
}
