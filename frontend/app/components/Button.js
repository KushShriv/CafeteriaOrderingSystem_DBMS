"use client";

import { Icon } from "@mui/material";
import React from "react";

export default function Button({
  label,
  disabled,
  outline,
  small,
  custom,
  icon,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
    rounded-md
    hover:opacity-80
    transition
    w-full
    flex
    items-center
    justify-center
    gap-2
    ${outline ? "bg-white" : "bg-slate-700"}
    ${outline ? "text-slate-700" : "text-white"}
    ${small ? "text-sm font-light" : "text-md font-semibold"}
    ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-2"}
    ${custom ? custom : ""}
    `}

    // disabled:opacity-70
    // disabled: cursor-not-allowed
    >
      {icon && <Icon size={24} />}
      {label}
    </button>
  );
}
