import clsx from "clsx";
import "./input.scss";

type TextInputProps = {
  placeholder?: string;
  size?: number;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export function TextInput({ placeholder, size, onChange }: TextInputProps) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      size={size}
      onChange={onChange}
      className={clsx({
        Text: true,
        Input: true,
      })}
    ></input>
  );
}
