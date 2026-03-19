import { useState, useEffect } from "react";

/**
 * Preloads an image URL and returns whether it's ready.
 * Useful for background-image divs that should fade in after loading.
 */
export function usePreloadImage(src: string | undefined): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!src) return;
    setReady(false);
    const img = new Image();
    img.onload = () => setReady(true);
    img.onerror = () => setReady(true); // show anyway on error
    img.src = src;
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return ready;
}
