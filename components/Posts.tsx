import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { UrlObject } from "url";

export default function Posts({ posts }: any) {
  return (
    <div className="h-[200vh] w-full grid grid-cols-2">
      {posts.posts.map(
        (post: {
          datePublished: ReactNode; slug: string | UrlObject; id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
}) => {
          return (
            <Link  className="m-4 max-h-[50vh] border p-4 rounded-2xl" href={post.slug} key={post.id}>
                <div>
                  <h3 className="text-xl">{post.title}</h3>
                  <p className="text-base">{post.datePublished}</p>
                  <p className="">{post.description}</p>
                </div>
            </Link>
          );
        }
      )}
    </div>
  );
}
