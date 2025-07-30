"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import style from "./Input.module.css";

interface InputLabelProps {
  label: string;
  name: string;
  id: string;
  type?: string;
}

export default function Input({
  label,
  name,
  id,
  type = "text",
}: InputLabelProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={`form-floating mb-3 w-100 ${style.input}`}>
      <input
        type={type}
        className="form-control w-100"
        id={id}
        autoComplete="off"
        {...register(name)}
      />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {errors && (
        <p style={{ color: "red" }}>{errors[name]?.message as string}</p>
      )}
    </div>
  );
}
