import clsx from "clsx";
import React from "react";
import "./arrow.css";

type ArrowProps = {
  direction: "up" | "down";
  onClick: () => void;
};
export default function Arrow({ direction, onClick }: ArrowProps) {
  return (
    <button className={clsx("Arrow", direction)} onClick={onClick}>
      <img src="/arrow.svg" alt="arrow" />
    </button>
  );
}
