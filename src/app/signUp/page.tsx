"use client";
import style from "../login/styleLoginPage.module.css";
import FormSignUp from "@/components/signUp/FormSignUp";

export default function SignUp() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className={`card p-4 ${style.loginContainer}`}>
        <h3 className="mb-4">Login</h3>
        <FormSignUp />
      </div>
    </div>
  );
}
