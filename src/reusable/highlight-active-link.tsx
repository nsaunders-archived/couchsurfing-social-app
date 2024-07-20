"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function HighlightActiveLink({
  children,
  pathname,
}: {
  children?: ReactNode;
  pathname: string;
}) {
  return usePathname() === pathname ? (
    <span style={{ color: "var(--pico-primary-inverse)" }}>{children}</span>
  ) : (
    children
  );
}
