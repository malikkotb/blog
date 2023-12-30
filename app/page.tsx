import Ellipse from "@/components/Ellipse";
import styles from "./styles.module.css";
import Posts from "@/components/Posts";
import Tag from "@/components/Tag";
import TypeWriter from "@/components/TypeWriter";
import PostBody from "@/components/PostBody";
import { GET_ALL_SLUGS, GET_ALL_POSTS, GET_INDIVIDUAL_POST } from "../graphql/queries";
import graphcms from "@/lib/client";

export default async function Home() {
  const posts = await graphcms.request(GET_ALL_POSTS)
  return (
    <main className="flex min-h-screen flex-col mt-12 items-center p-10 px-14">
      <div className="">
        <div className=" text-[3vw] font-medium my-8 items-center text-center flex flex-col">
          <p className="flex gap-2 items-center">
            Welcome to my blog {<Ellipse width={36} height={36} />}
          </p>
          <span className="opacity-70">
            I&apos;m Malik and here are my latest explorations in <TypeWriter />
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
        <Tag name="Frontend" />
        <Tag name="Backend" />
      </div>
      <Posts posts={posts} />
    </main>
  );
}
