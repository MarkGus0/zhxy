import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
    as: "button";
    href?: never;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof ButtonBaseProps> & {
    as?: "a";
    href?: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  as,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.label}>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </>
  );

  if (as === "button") {
    return (
      <button
        className={classes}
        data-variant={variant}
        data-size={size}
        disabled={loading || (props as ComponentPropsWithoutRef<"button">).disabled}
        {...(props as ComponentPropsWithoutRef<"button">)}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      className={classes}
      data-variant={variant}
      data-size={size}
      {...(props as ComponentPropsWithoutRef<"a">)}
    >
      {content}
    </a>
  );
}
