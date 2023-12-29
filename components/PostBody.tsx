import { MDXRemote } from "next-mdx-remote/rsc";
import { ReactNode } from "react";
import rehypePrism from "rehype-prism-plus";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeCodeTitles from "rehype-code-titles";
import { Code } from "bright";
interface MDXComponentProps {
  children?: ReactNode;
}

const components = {
  pre: Code,
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
}

export default function PostBody({
  title,
  content,
  components: overrideComponents,
}: PostBodyProps) {
  return (
    <div>
      <div className="text-red-500">{title}</div>
      <MDXRemote
        source={content}
        components={{ ...components, ...overrideComponents }}
      />
    </div>
  );
}