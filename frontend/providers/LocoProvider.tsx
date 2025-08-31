// lib/loco-context.tsx
"use client";
import React, { createContext, useContext } from "react";

export type LocoType = {
  on: (e: "scroll", cb: (args: any) => void) => void;
  off: (e: "scroll", cb: (args: any) => void) => void;
  update?: () => void;
} | null;

const LocoContext = createContext<LocoType>(null);

export const LocoProvider = LocoContext.Provider;
export const useLoco = () => useContext(LocoContext);
