import { MDXRemote } from "next-mdx-remote/rsc";
import { ReactNode } from "react";
import { ArrowLeftIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import VideoComp from "./VideoComp";
import Link from "next/link";
import { Button } from "./ui/button";
import markdownCompts from "./markdownCompts";
interface MDXComponentProps {
  children?: ReactNode;
}
const convertDateFormat = (dateStr: string): string => {
  const dateObj = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return dateObj.toLocaleDateString("en-US", options);
};

interface PostBodyProps {
  components?: { [key: string]: React.ComponentType<MDXComponentProps> };
  mdContent: string,
  title: string;
  subtitle: string;
  coverPhotoSrc: string;
  author: string;
  avatar: string;
  datePublished: string;
  description: string;
}

export default function PostBody({
  title,
  subtitle,
  mdContent,
  components: overrideComponents,
  coverPhotoSrc,
  author,
  avatar,
  datePublished,
  description,
}: PostBodyProps) {
  return (
    <div className="p-8 px-12 md:px-40 md:mt-4">
      <Link href={"/"} className="">
        <p className="my-6 text-sm flex items-center gap-2 opacity-80">
          <ArrowLeftIcon />
          Tutorials
        </p>
      </Link>
      <div className="flex gap-2">
        <Image
          src={avatar}
          width={50}
          height={50}
          alt="avatar"
          className="rounded-full"
        />
        <div className="">
          <p className="opacity-80">{author}</p>
          <p className="text-xs opacity-80 flex gap-1">
            {convertDateFormat(datePublished as string)} / <span className="p-2 bg-green-700 rounded-full"></span> Beginner / Short
          </p>
        </div>
      </div>
      <div className="my-4">
        <div className="font-medium text-2xl">
          {title}
        </div>
        <div className="text-sm opacity-80">{subtitle}</div>
      </div>
      <p className="pt-2 pb-4">{description}</p>
      <div className="flex gap-2">
        {/* TODO: add links to live demo and source code (github) which can be imported from hygraph as props */}
        <button className="flex gap-1 rounded-lg bg-[#0900f9] bg-opacity-5 text-opacity-65 text-[#0900f9] px-4 py-2 font-medium items-center">Live Demo <ArrowTopRightIcon className="ml-1" /></button>
        <button className="flex gap-1 rounded-lg bg-[#0900f9] bg-opacity-5 text-opacity-65 text-[#0900f9] px-4 py-2 font-medium items-center">Source Code <ArrowTopRightIcon className="ml-1" /></button>

      </div>
      <VideoComp />
      {/* <Image src={coverPhotoSrc} width={300} height={300} alt="cover photo" /> */}
      {/* <MDXRemote
        source={content}
        components={{ ...components, ...overrideComponents }}
      /> */}
      <MDXRemote source={mdContent} components={{ ...markdownCompts, ...overrideComponents }} />

    </div>
  );
}
