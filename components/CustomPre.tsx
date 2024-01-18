"use client";
import { ReactNode, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyIcon } from "@radix-ui/react-icons";
import {
  docco,
  atelierDuneDark,
  atelierCaveLight,
  atelierCaveDark,
  googlecode,
  arduinoLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import React from "react";
import { useTheme } from "next-themes";

interface MDXComponentProps {
  children?: ReactNode;
}
export default function CustomPre({ children, ...props }: MDXComponentProps) {
  const { theme } = useTheme();

  // Extract the text content from children
  let codeString = "";
  if (React.isValidElement(children) && children.props) {
    codeString = children.props.children;
  }

  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset state after 2 seconds
    });
  };

  const style = theme === "dark" ? atelierDuneDark : atelierCaveDark;

  return (
    <div className="my-6">
      <div className="flex justify-between px-2 py-1 rounded-lg rounded-b-none border-b-0 border">
        <p>page.tsx</p>
        <button
          onClick={() => copyToClipboard(codeString)}
          className="cursor-pointer hover:text-[#0900f9] p-1 rounded-lg reactive
          hover-shadow border border-transparent hover:border-[#0900f9]"
        >
          <CopyIcon />
        </button>
      </div>
      <SyntaxHighlighter
        className={"border"}
        showLineNumbers
        language="typescript"
        customStyle={{ background: "transparent", padding: "15px" }}
        style={atelierCaveLight}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
