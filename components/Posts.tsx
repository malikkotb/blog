import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
import { UrlObject } from "url";
import Image from "next/image";

const convertDateFormat = (dateStr: string): string => {
  const dateObj = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return dateObj.toLocaleDateString("en-US", options);
};

export default function Posts({ posts }: any) {
  return (
    // <div className="w-full flex flex-col sm:flex-wrap gap-6 sm:gap-8">
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
      {posts.posts.map(
        (post: {
          coverPhoto: any;
          datePublished: ReactNode;
          slug: string | UrlObject;
          id: Key | null | undefined;
          title: string;
          description: string;
        }) => {
          const { title, description, datePublished, coverPhoto } = post;

          return (
            <div
              className="h-[45vh] md:h-[65vh] flex flex-col p-2 gap-2 rounded-3xl bg-[#F7F7F1] hover:translate-y-[-2px] transform transition-all duration-300"
              key={post.id}
            >
              <div className="w-[25vh] md:w-[45vh] xl:w-[40vh] mx-auto my-auto">
                <img
                  src={coverPhoto.url}
                  className="w-full h-full rounded-xl object-cover"
                  alt="description"
                />
              </div>
              <div className="items-start flex flex-col gap-1 p-4">
                {/* <p className="text-sm opacity-70">
                  {convertDateFormat(datePublished as string)}
                </p> */}
                <Link href={post.slug} className="text-base font-medium">
                  {title}
                </Link>
                <div className="flex w-full justify-between">
                  <p className="overflow-y-hidden text-xs opacity-60">
                    {description}
                  </p>
                  <button className="rounded-full text-xs bg-white text-black px-2 py-1">Tag</button>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
