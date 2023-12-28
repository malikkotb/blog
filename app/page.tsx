"use client";
import Ellipse from "@/components/Ellipse";
import styles from "./styles.module.css";
import Tutorials from "@/components/Tutorials";
import { useEffect, useRef } from "react";
import Tag from "@/components/Tag";

export default function Home() {
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
    <main className="flex min-h-screen flex-col mt-12 items-center p-10 px-14">
      <div className="">
        <div className=" text-[3vw] font-medium my-8 items-center text-center flex flex-col">
          <p className="flex gap-2 items-center">
            Welcome to my blog {<Ellipse width={36} height={36} />}
          </p>
          <span className="opacity-70">
            I&apos;m Malik and here are my latest explorations in{" "}
            <span
              ref={typewriterRef}
              id="typewriter"
              className="font-semibold text-[#0072ef]"
            ></span>
            <span className={styles.cursor}>|</span>
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 my-6">
        {/* TODO: make these links to filter all tutorials by and of course tag each tutorial with >=1 tag */}

        <Tag name="Web Development" />
        <Tag name="Tools" />
        <Tag name="Articles" />
        <Tag name="Videos" />
        <Tag name="Podcasts" />
        <Tag name="Tutorials" />
        <Tag name="Frontend" />
        <Tag name="Backend" />
      </div>
      <Tutorials />
    </main>
  );
}
