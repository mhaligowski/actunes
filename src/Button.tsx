import "./button.scss";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  children: React.ReactNode;
};
export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="Button"
    >
      {props.children}
    </button>
  );
}
