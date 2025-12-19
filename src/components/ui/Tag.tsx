import type { ComponentPropsWithoutRef } from "react";
import styles from "./Tag.module.css";

type TagProps = ComponentPropsWithoutRef<"span"> & {
  tone?: "teal" | "warm" | "cool";
};

export function Tag({ tone = "teal", className, ...props }: TagProps) {
  const classes = [styles.tag, className].filter(Boolean).join(" ");

  return <span className={classes} data-tone={tone} {...props} />;
}
