"use client";

import React from "react";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

/**
 * Backwards-compatibility wrapper delegating to SmoothScrollProvider
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}
