import { useReducedMotion } from "framer-motion";
import { useMounted } from "./use-mounted";

/**
 * SSR-safe wrapper around framer-motion's useReducedMotion.
 * Returns `true` (reduced) until the component has mounted on the client,
 * so the server render and the first client render always agree.
 * After mount, follows the user's actual OS preference.
 *
 * Use this everywhere instead of `!!useReducedMotion()` to prevent
 * hydration mismatches on animated components.
 */
export function useSafeReducedMotion(): boolean {
  const pref = useReducedMotion();
  const mounted = useMounted();
  if (!mounted) return true;
  return !!pref;
}
