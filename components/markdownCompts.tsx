import { ReactNode } from "react";
import { Code as BrightCode } from "bright";
import dark_plus from "./themes/dark_plus.json"
interface MDXComponentProps {
  children?: ReactNode;
}
const CodeWithLineNumbers = ({ children, ...props }: MDXComponentProps) => {
    // BrightCode.theme = {
    //   dark: "github-dark",
    //   light: "github-light",
    // };
    return (
      <div className="rounded-full">
        {/* <div data-theme="light">
          <BrightCode {...props} lineNumbers />;
        </div> */}
        <div data-theme="dark" className="rounded-full">
          <BrightCode theme={dark_plus} className=" " {...props} lineNumbers>
            {children}
          </BrightCode>
        </div>
      </div>
    );
  };

const markdownCompts = {
    pre: CodeWithLineNumbers,
    //   code: ({ children, ...props }: MDXComponentProps) => (
    //     <code {...props} className="bg-red-500">
    //       {children}
    //     </code>
    //   ),
    h1: ({ children, ...props }: MDXComponentProps) => (
      <h1 {...props} className="text-2xl font-medium">
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: MDXComponentProps) => (
      <h2 {...props} className="text-xl font-medium mt-[30px] mb-[16px]">
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: MDXComponentProps) => (
      <h3 {...props} className="text-lg font-medium my-[18px]">
        {children}
      </h3>
    ),
    p: ({ children, ...props }: MDXComponentProps) => (
      <p {...props} className="text-base leading-5 mt-[10px] mb-[30px] opacity-75">
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
      <li {...props} className="ml-4 opacity-75">
        {children}
      </li>
    ),
    ol: ({ children, ...props }: MDXComponentProps) => (
      <ol {...props} className="list-decimal list-inside my-2">
        {children}
      </ol>
    ),
}

export default markdownCompts;