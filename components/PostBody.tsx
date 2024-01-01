import { MDXRemote } from "next-mdx-remote/rsc";

import { ReactNode } from "react";
import { Code as BrightCode } from "bright";
import moonlight from "../components/themes/moonlight.json";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";

interface MDXComponentProps {
  children?: ReactNode;
}

const CodeWithLineNumbers = (props: any) => {
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
        <BrightCode className=" " {...props} lineNumbers />
      </div>
    </div>
  );
};

const components = {
  pre: CodeWithLineNumbers,
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
  coverPhotoSrc: string;
  author: string;
  avatar: string;
  datePublished: string;
}

import React from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";

export default function PostBody({
  title,
  content,
  components: overrideComponents,
  coverPhotoSrc,
  author,
  avatar,
  datePublished,
}: PostBodyProps) {
  return (
    <div>
      <div className="p-8">
        <div className="">
          {author}
          <Image
            src={avatar}
            width={50}
            height={50}
            alt="avatar"
            className="rounded-full"
          />
          {datePublished}
        </div>
        <div className="text-red-500">{title}</div>
        <Image src={coverPhotoSrc} width={300} height={300} alt="cover photo" />

        <MDXRemote
          source={content}
          components={{ ...components, ...overrideComponents }}
        />
      </div>
    </div>
  );
}
