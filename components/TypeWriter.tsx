"use client"
import { useRef } from "react";

export default function TypeWriter() {
  const topics: string[] = ["coding", "frontend", "backend", "animations"];
  const typewriterRef = useRef<HTMLDivElement>(null);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let sleepTime = 100; // (in ms)

  let curTopicIndex = 0;

  const writeLoop = async () => {
    while (true) {
      let currentTopic = topics[curTopicIndex];

      for (let i = 0; i < currentTopic.length; i++) {
        if (typewriterRef.current) {
          typewriterRef.current.innerText = currentTopic.substring(0, i + 1);
        }
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = currentTopic.length; i > 0; i--) {
        if (typewriterRef.current) {
          typewriterRef.current.innerText = currentTopic.substring(0, i - 1);
        }
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (curTopicIndex === topics.length - 1) {
        curTopicIndex = 0;
      } else {
        curTopicIndex++;
      }
    }
  };

  writeLoop();

  return (
    <span ref={typewriterRef} className="font-semibold text-[#0072ef]"></span>
  );
}
