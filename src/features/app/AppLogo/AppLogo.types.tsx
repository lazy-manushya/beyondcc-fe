export type AppLogoVariant = "normal" | "white";

export interface IStyledAppLogoProps {
  $variant?: AppLogoVariant;
}

export interface IAppLogoProps {
  className?: string;
  variant?: AppLogoVariant;
}
