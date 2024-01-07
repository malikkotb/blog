"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function VideoComp() {
  // return (
  //   <div>
  //     <video
  //       suppressHydrationWarning
  //       autoPlay
  //       loop
  //       className="rounded-lg"
  //     >
  //       <source src="./beach_vid.mp4" />
  //     </video>
  //   </div>
  // );

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div>
      {hasWindow && (
        <video suppressHydrationWarning autoPlay muted loop className="rounded-lg">
          <source src="./beach_vid.mp4" />
        </video>
      )}
    </div>
  );
}
