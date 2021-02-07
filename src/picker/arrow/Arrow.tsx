import clsx from "clsx";
import React from "react";
import "./arrow.css";

type ArrowProps = {
  direction: "up" | "down";
  disabled?: boolean;
  onClick: () => void;
};

export default function Arrow({
  direction,
  disabled = false,
  onClick,
}: ArrowProps) {
  return (
    <button
      className={clsx("Arrow", direction)}
      onClick={onClick}
      disabled={disabled}
    >
      <i className={clsx("fas", `fa-angle-double-${direction}`)}></i>
    </button>
  );
}
