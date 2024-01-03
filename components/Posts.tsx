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
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return dateObj.toLocaleDateString('en-US', options);
};

const dateExample = "2023-12-31";
const convertedDate = convertDateFormat(dateExample);
console.log(convertedDate);

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
              className="flex flex-col h-[45vh] p-2 rounded-2xl"
              href={post.slug}
              key={post.id}
            >
              <div className="w-full h-[18vw]">
                <img
                  src={coverPhoto.url}
                  className="w-full h-full rounded-xl object-cover"
                  alt="description"
                />
              </div>
              {/* <div className="items-center flex">
                <img
                  src={coverPhoto.url}
                  className="h-[18vw] w-[25vw] rounded-xl object-cover"
                  alt="description"
                />
              </div> */}

              <h3 className="text-xl">{title}</h3>
              <p className="text-sm opacity-70">{convertDateFormat(datePublished as string)}</p>
              <p className=" overflow-y-hidden">{description}</p>
            </Link>
          );
        }
      )}
    </div>
  );
}

{
  /* <Image
                src={coverPhoto?.url}
                width={300}
                height={200}
                alt="cover photo"
                style={{ objectFit: "fill" }}
                sizes="(max-width: 300) 100vw, 33vw"
              /> */
}
