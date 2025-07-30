"use client";
import Button from "@/components/buttons/Button";
import Input from "@/components/Inputs/Input";
import { SignUpInsercaoInput } from "@/components/signUp/types/signUpTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import style from "./styleFormSignUp.module.css";
import LinkPerso from "../LinkPerso/LinkPerso";
import { toast } from "react-toastify";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  email: z.string().min(1, "Email is required"),
});

export default function FormSignUp() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const form = useForm<SignUpInsercaoInput>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", password: "", email: "" },
  });

  async function onSubmit(data: SignUpInsercaoInput) {
    try {
      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(() => {
        router.push("/");
        toast.success("Successful registered user");
      });
    } catch (err) {
      setError("Invalid username or password");
      console.error("Login error:", err);
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={style.form}>
        <Input label="Email" id="email" name="email" type="text" />

        <Input label="Username" id="username" name="username" type="text" />

        <Input label="Password" id="password" name="password" type="password" />

        {error && <span className="alert alert-danger">{error}</span>}

        <LinkPerso href="/login" className={style.link_login}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-bar-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
            />
          </svg>
          Login
        </LinkPerso>

        <Button label="Cadastrar" type="submit" />
      </form>
    </FormProvider>
  );
}
