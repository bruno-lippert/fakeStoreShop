"use client";
import { FormProvider, useForm } from "react-hook-form";
import style from "./styleFormLogin.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../buttons/Button";
import { Login } from "./types/loginTypes";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Inputs/Input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LinkPerso from "../LinkPerso/LinkPerso";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export default function FormLogin() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const form = useForm<Login>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", password: "" },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  async function onSubmit(data: Login) {
    setError(null);
    try {
      const credentials = { username: data.username, password: data.password };
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result: { token: string } = await response.json();

      document.cookie = `token=${result.token}; path=/`;

      router.push("/");
    } catch (err) {
      setError("Invalid username or password");
      console.error("Login error:", err);
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [error]);
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <Input label="Username" id="username" name="username" type="text" />

        <Input label="Password" id="password" name="password" type="password" />

        <LinkPerso
          href="/signUp"
          role="button"
          data-bs-toggle="button"
          style={{ width: "100%", marginBottom: "10px" }}
        >
          Sign up
        </LinkPerso>

        <Button label="Login" type="submit" />
      </form>
    </FormProvider>
  );
}
