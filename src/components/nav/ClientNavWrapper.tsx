"use client";

import { usePathname } from "next/navigation";
import SlideButton from "../buttons/SlideButton";
import { Navigation } from "./Navigation";

export function ClientNavWrapper() {
  const pathname = usePathname();
  const hideNavRoutes = ["/login"];

  if (hideNavRoutes.includes(pathname)) return <SlideButton />;

  return <Navigation />;
}
