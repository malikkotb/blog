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
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2">
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
              className="flex flex-col h-[45vh] p-2 gap-2 rounded-2xl"
              key={post.id}
            >
              <div className="w-full h-[18vw]">
                <img
                  src={coverPhoto.url}
                  className="w-full h-full rounded-xl object-cover hover:translate-y-[-10px] transform transition-all duration-300"
                  alt="description"
                />
              </div>
              <p className="text-sm opacity-70">
                {convertDateFormat(datePublished as string)}
              </p>
              <div>
                <Link href={post.slug} className="hover:underline text-xl font-bold">
                  {title}
                </Link>
                <p className="overflow-y-hidden text-sm opacity-70">
                  {description}
                </p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
