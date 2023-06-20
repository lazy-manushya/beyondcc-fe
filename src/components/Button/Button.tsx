import React, { useRef } from "react";
import { useButton } from "react-aria";
import Link from "next/link";

import {
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_COLOR_VARIANT,
} from "./constants";
import { IButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

const Button: React.FunctionComponent<IButtonProps> = React.forwardRef(
  (
    {
      link,
      variant = DEFAULT_BUTTON_VARIANT,
      disabled: isDisabled,
      onFocus,
      onClick,
      ref: _,
      useReactAria = true,
      colorVariant = DEFAULT_COLOR_VARIANT,
      size = DEFAULT_BUTTON_SIZE,
      ...props
    },
    forwardedRef: any
  ) => {
    const ref = useRef<any>(null);
    const { buttonProps } = useButton(
      { isDisabled, onPress: onClick, variant: variant, ...props } as any,
      ref
    );
    const { children } = props;

    return (
      <StyledButton
        variant={variant}
        colorVariant={colorVariant}
        size={size}
        {...props}
        {...(useReactAria ? buttonProps : {})}
        ref={(value: any) => {
          ref.current = value;
          if (forwardedRef) {
            forwardedRef.current = value;
          }
        }}
        //--------------
        as={link ? Link : StyledButton}
        {...(link ? { href: link } : {})}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
