import { createContext, useContext } from "react";
import { pt } from "./pt";
import { en } from "./en";
import type { Dict } from "./pt";

export type Locale = "pt" | "en";
export const dictionaries: Record<Locale, Dict> = { pt, en };

export const LocaleContext = createContext<Locale>("pt");

export function useT(): Dict {
  const locale = useContext(LocaleContext);
  return dictionaries[locale];
}
