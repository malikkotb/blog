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

export default function Posts({ posts }: any) {
  return (
    // <div className="w-full flex flex-col sm:flex-wrap gap-6 sm:gap-8">
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
      {posts.posts.map(
        (post: {
          coverPhoto: any;
          datePublished: ReactNode;
          slug: string | UrlObject;
          id: Key | null | undefined;
          title:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
          description:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
        }) => {
          const { title, description, datePublished, coverPhoto } = post;

          return (
            <Link
              className="flex flex-col h-full border p-4 rounded-2xl"
              href={post.slug}
              key={post.id}
            >
              <div>
                <Image
                  src={coverPhoto?.url}
                  width={150}
                  height={100}
                  alt="cover photo"
                />
                <h3 className="text-xl">{title}</h3>
                <p className="text-base">{datePublished}</p>
                <p className="">{description}</p>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
}
