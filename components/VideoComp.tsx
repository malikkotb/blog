"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function VideoComp({src}: {src: string}) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className="my-4">
      {hasWindow && (
        <video suppressHydrationWarning autoPlay muted loop className="rounded-lg">
          <source src={src} />
        </video>
      )}
    </div>
  );
}
