import React from "react";

interface ButtonProps {
  label: string;
  type?: "submit" | "button" | "reset";
}

export default function Button({ label, type }: ButtonProps) {
  return (
    <div>
      <button type={type} className="btn btn-primary mb-3">
        {label}
      </button>
    </div>
  );
}
