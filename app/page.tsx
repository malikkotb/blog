import Ellipse from "@/components/Ellipse";
import styles from "./styles.module.css";
import Posts from "@/components/Posts";
import Tag from "@/components/Tag";
import TypeWriter from "@/components/TypeWriter";
import { GET_ALL_POSTS, GET_TAGS } from "../graphql/queries";
import graphcms from "@/lib/client";
import Tags from "@/components/Tags";

export default async function Home() {
  const posts = await graphcms.request(GET_ALL_POSTS);
  const tags = await graphcms.request(GET_TAGS);
  return (
    <main className="flex min-h-screen flex-col mt-12 items-center p-10 px-14">
      <div className="">
        <div className="text-lg sm:text-[3vw] font-medium my-8 items-center text-center flex flex-col">
          <p className="flex gap-2 items-center">
            Welcome to my blog {<Ellipse width={36} height={36} />}
          </p>
          <span className="opacity-70">
            I&apos;m Malik and here are my latest explorations in <TypeWriter />
            <span className={styles.cursor}>|</span>
          </span>
        </div>
      </div>
      <Tags tags={tags} />
      <Posts posts={posts} />
    </main>
  );
}
