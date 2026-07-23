import { useRouterState, Link, type LinkProps } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

export type Lang = "nl" | "en";

export function useLang(): Lang {
  const search = useRouterState({
    select: (s) => s.location.search as Record<string, unknown> | undefined,
  });
  return search?.lang === "en" ? "en" : "nl";
}

export function pick<T>(lang: Lang, values: { nl: T; en?: T }): T {
  return lang === "en" && values.en !== undefined ? values.en : values.nl;
}

type TValue = { nl: unknown; en?: unknown };
type TDict = Record<string, TValue>;
type Translated<D extends TDict> = { [K in keyof D]: D[K]["nl"] };

export function useT<D extends TDict>(dict: D): Translated<D> {
  const lang = useLang();
  const out = {} as Translated<D>;
  for (const k in dict) {
    const v = dict[k];
    (out as Record<string, unknown>)[k] =
      lang === "en" && v.en !== undefined ? v.en : v.nl;
  }
  return out;
}

export function T({ nl, en }: { nl: ReactNode; en?: ReactNode }) {
  const lang = useLang();
  return <>{lang === "en" && en !== undefined ? en : nl}</>;
}

export function LangLink(props: ComponentProps<typeof Link>) {
  return <Link {...(props as LinkProps)} search={(prev) => prev as never} />;
}
