// components/NeuForm.tsx
"use client";

import * as FormPrimitive from "@radix-ui/react-form";
import { clsx } from "clsx";
import React from "react";

type FormVariant = "default" | "wide" | "compact";

interface NeuFormProps extends React.ComponentProps<typeof FormPrimitive.Root> {
  variant?: FormVariant;
  className?: string;
}

export const NeuForm: React.FC<NeuFormProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    default: "form",
    wide: "form-wide",
    compact: "form-compact",
  }[variant];

  const combinedClassName = clsx(
    variantStyles,
    Array.isArray(className) ? className.join(" ") : className,
  );

  return (
    <FormPrimitive.Root className={combinedClassName} {...props}>
      {children}
    </FormPrimitive.Root>
  );
};

// Sub-components
interface NeuFormFieldProps
  extends React.ComponentProps<typeof FormPrimitive.Field> {
  className?: string;
}

export const NeuFormField: React.FC<NeuFormFieldProps> = ({
  className,
  children,
  ...props
}) => (
  <FormPrimitive.Field
    className={clsx(
      "form-field",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </FormPrimitive.Field>
);

interface NeuFormLabelProps
  extends React.ComponentProps<typeof FormPrimitive.Label> {
  className?: string;
}

export const NeuFormLabel: React.FC<NeuFormLabelProps> = ({
  className,
  children,
  ...props
}) => (
  <FormPrimitive.Label
    className={clsx(
      "form-label",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </FormPrimitive.Label>
);

interface NeuFormMessageProps
  extends React.ComponentProps<typeof FormPrimitive.Message> {
  className?: string;
}

export const NeuFormMessage: React.FC<NeuFormMessageProps> = ({
  className,
  children,
  ...props
}) => (
  <FormPrimitive.Message
    className={clsx(
      "form-message",
      Array.isArray(className) ? className.join(" ") : className,
    )}
    {...props}
  >
    {children}
  </FormPrimitive.Message>
);

interface NeuFormControlProps
  extends React.ComponentProps<typeof FormPrimitive.Control> {
  className?: string;
  asTextarea?: boolean;
}

export const NeuFormControl: React.FC<NeuFormControlProps> = ({
  className,
  asTextarea = false,
  children,
  ...props
}) => {
  const controlClass = asTextarea ? "form-textarea" : "form-control";
  const combinedClassName = clsx(
    controlClass,
    Array.isArray(className) ? className.join(" ") : className,
  );

  return (
    <FormPrimitive.Control asChild>
      {React.cloneElement(
        React.Children.only(children) as React.ReactElement<{
          className?: string;
        }>,
        {
          className: combinedClassName,
          ...props,
        },
      )}
    </FormPrimitive.Control>
  );
};

interface NeuFormSubmitProps
  extends React.ComponentProps<typeof FormPrimitive.Submit> {
  className?: string;
}

export const NeuFormSubmit: React.FC<NeuFormSubmitProps> = ({
  className,
  children,
  ...props
}) => (
  <FormPrimitive.Submit asChild>
    <button
      className={clsx(
        "form-submit",
        Array.isArray(className) ? className.join(" ") : className,
      )}
      {...props}
    >
      {children}
    </button>
  </FormPrimitive.Submit>
);
