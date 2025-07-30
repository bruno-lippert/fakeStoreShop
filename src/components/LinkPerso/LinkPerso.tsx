"use client"
import Link from "next/link";
import React from "react";

interface LinkEstilizadoProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function LinkPerso({
  href,
  children,
  ...rest
}: LinkEstilizadoProps) {
  return (
    <Link
      href={href}
      className={`link link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover`}
      {...rest}
    >
      {children}
    </Link>
  );
}
