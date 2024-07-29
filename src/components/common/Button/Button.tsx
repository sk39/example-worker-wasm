import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  width?: number | string;
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  className,
  width,
  disabled,
}: Props) {
  return (
    <button
      className={`${styles.button} ${className}`}
      style={{ width }}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}
