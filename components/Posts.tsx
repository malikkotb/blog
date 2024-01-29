"use client";
import Link from "next/link";
import { ReactNode, Key, useState } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { UrlObject } from "url";
import useStore from "@/app/(store)/store";

export default function Posts({ posts }: any) {
  const { filteredTag } = useStore();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
      {posts.posts
        .filter((post: { tags: any }) =>
          post.tags[0].name.includes(filteredTag)
        )
        .map(
          (post: {
            tags: any;
            coverPhoto: any;
            datePublished: ReactNode;
            slug: string | UrlObject;
            id: Key | null | undefined;
            title: string;
            description: string;
            subtitle: string;
            demoVideo: any;
          }) => {
            const {
              title,
              subtitle,
              description,
              datePublished,
              coverPhoto,
              demoVideo,
            } = post;
            return (
              <Link
                href={post.slug}
                className="h-[45vh] group md:h-[65vh] flex flex-col p-2 px-4 gap-2 rounded-3xl bg-[#dddbff] bg-opacity-20 dark:bg-[#020024] dark:bg-opacity-10 hover:translate-y-[-2px] transform transition-all duration-300"
                key={post.id}
              >
                <div className="justify-end flex w-full">
                  <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg bg-white text-black p-2 mt-1 mr-1">
                    <HiMiniArrowUpRight />
                  </button>
                </div>
                {/* w-[30vh] sm:w-[20vh] md:w-[30vh] xl:w-[40vh] */}
                <div suppressHydrationWarning className="w-full  relative mx-auto my-auto  rounded-lg">
                  <img
                    suppressHydrationWarning
                    src={coverPhoto.url}
                    className="w-full h-full rounded-lg object-cover transition-opacity duration-500 group-hover:opacity-0"
                    alt="cover photo"
                  />
                  <video
                    suppressHydrationWarning
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full rounded-lg object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  >
                    <source src={demoVideo.url} type="video/mp4" />
                  </video>
                </div>

                <div className="items-start flex flex-col gap-1 p-4 pb-2">
                  <div className="text-base font-medium">{title}</div>
                  <div className="flex w-full justify-between">
                    <p className="overflow-y-hidden text-xs opacity-60">
                      {subtitle}
                    </p>
                    <button className="rounded-full text-xs bg-white text-black px-3 py-1">
                      {post.tags[0].name}
                    </button>
                  </div>
                </div>
              </Link>
            );
          }
        )}
    </div>
  );
}
