import { MDXRemote } from "next-mdx-remote/rsc";
import { ReactNode } from "react";
import { Code as BrightCode } from "bright";
import { ArrowLeftIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import moonlight from "./themes/moonlight.json";
import Image from "next/image";
import VideoComp from "./VideoComp";
import Link from "next/link";
import { Button } from "./ui/button";
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

const CodeWithLineNumbers = ({ children, ...props }: MDXComponentProps) => {
  BrightCode.theme = {
    dark: "github-dark",
    light: "github-light",
  };
  return (
    <div className="rounded-full">
      {/* <div data-theme="light">
        <BrightCode {...props} lineNumbers />;
      </div> */}
      <div data-theme="dark" className="rounded-full">
        <BrightCode className=" " {...props} lineNumbers>
          {children}
        </BrightCode>
      </div>
    </div>
  );
};

const components = {
  pre: CodeWithLineNumbers,
  //   code: ({ children, ...props }: MDXComponentProps) => (
  //     <code {...props} className="bg-red-500">
  //       {children}
  //     </code>
  //   ),
  h1: ({ children, ...props }: MDXComponentProps) => (
    <h1 {...props} className="text-3xl font-bold">
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 {...props} className="text-2xl font-bold">
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 {...props} className="text-xl font-bold">
      {children}
    </h3>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p {...props} className="text-base">
      {children}
    </p>
  ),
  a: ({ children, ...props }: MDXComponentProps) => (
    <a {...props} className="hover:underline">
      {children}
    </a>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul {...props} className="list-disc list-inside my-2">
      {children}
    </ul>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li {...props} className="ml-4">
      {children}
    </li>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol {...props} className="list-decimal list-inside my-2">
      {children}
    </ol>
  ),
  // Add more custom components with TypeScript types as needed
};

interface PostBodyProps {
  components?: { [key: string]: React.ComponentType<MDXComponentProps> };
  content: string;
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
  content,
  components: overrideComponents,
  coverPhotoSrc,
  author,
  avatar,
  datePublished,
  description,
}: PostBodyProps) {
  return (
    <div className="p-8 px-40 mt-10">
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
          <p className="text-xs opacity-80">
            {convertDateFormat(datePublished as string)} / Beginner / Short
          </p>
        </div>
      </div>
      <div className="my-4">
        <div className="font-medium text-2xl text-[#070B28] dark:text-white">
          {title}
        </div>
        <div className="text-sm opacity-80">{subtitle}</div>
      </div>
      <p className="py-4">{description}</p>
      <div className="flex gap-2">
        <Button variant="outline">Live Demo <ArrowTopRightIcon className="ml-1" /></Button>
        <Button variant="outline">Source Code <ArrowTopRightIcon className="ml-1" /></Button>

      </div>
      <VideoComp />
      {/* <Image src={coverPhotoSrc} width={300} height={300} alt="cover photo" /> */}
      <MDXRemote
        source={content}
        components={{ ...components, ...overrideComponents }}
      />
    </div>
  );
}
