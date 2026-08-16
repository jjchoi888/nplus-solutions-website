"use client";

import { useEffect } from "react";

export function ContentProtection() {
  useEffect(() => {
    const preventContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const preventImageDrag = (event: DragEvent) => {
      const target = event.target;
      if (target instanceof HTMLImageElement) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("dragstart", preventImageDrag);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("dragstart", preventImageDrag);
    };
  }, []);

  return null;
}
