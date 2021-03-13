import "./button.scss";
import clsx from "clsx";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  visible?: boolean;
  children: React.ReactNode;
};
export function Button({
  onClick,
  disabled,
  visible = true,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx({ Button: true, hidden: !visible })}
    >
      {children}
    </button>
  );
}
