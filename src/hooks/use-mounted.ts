import { useEffect, useState } from "react";

/**
 * Returns true only after the component has mounted on the client.
 * Use to gate any conditional render or animation prop that depends
 * on browser-only APIs (matchMedia, window, etc.) to avoid SSR
 * hydration mismatches.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
