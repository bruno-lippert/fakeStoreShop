"use client";
import FormLogin from "@/components/login/FormLogin";
import style from "./styleLoginPage.module.css";

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className={`card p-4 ${style.loginContainer}`}>
        <h3 className="mb-4">Login</h3>
        <FormLogin />
      </div>
    </div>
  );
}
