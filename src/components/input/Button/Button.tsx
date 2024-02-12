"use client"
import React, { useRef, useCallback } from "react";
import { useButton } from "react-aria";
import Link from "next/link";

import { IButtonProps } from "./Button.types";
import { DEFAULT_BUTTON_VARIANT } from "./Button.config";
import { StyledButton } from "./Button.styles";

//-------------------------------

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      link,
      variant = DEFAULT_BUTTON_VARIANT,
      disabled: isDisabled,
      onFocus,
      onClick,
      useReactAria = true,
      colorVariant = "primary",
      debug,
      ...props
    },
    forwardedRef: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const { buttonProps } = useButton(
      {
        isDisabled,
        onPress: onClick,
        variant: variant,
        type: "button",
        ...props,
      } as any,
      buttonRef
    );
    const { children } = props;

    const handleSetRef = useCallback(
      (newRef: HTMLButtonElement | null) => {
        if (forwardedRef) {
          if (forwardedRef instanceof Function) {
            forwardedRef(newRef);
          } else {
            (forwardedRef as any).current = newRef;
          }
        }

        buttonRef.current = newRef;
      },
      [forwardedRef]
    );

    const handleUpdateRef = useCallback(
      (newRef: HTMLButtonElement | null) => {
        handleSetRef(newRef);
      },
      [handleSetRef]
    );

    if (debug) {
      console.info("INFO", { variant, colorVariant });
    }

    return (
      <StyledButton
        $variant={variant}
        $colorVariant={colorVariant}
        {...props}
        {...(useReactAria ? buttonProps : {})}
        ref={handleUpdateRef}
        //--------------
        {...(link ? { href: link, as: Link } : {})}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
