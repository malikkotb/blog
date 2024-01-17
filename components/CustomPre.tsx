"use client";
import { ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyIcon } from '@radix-ui/react-icons'
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

  const style = theme === "dark" ? atelierDuneDark : atelierCaveDark;

  return (
    <>
      <div className="flex justify-between px-4 py-1 rounded-lg rounded-b-none border-b-0 border">
        <p>Title</p>
        <button className=""><CopyIcon  className="hover:text-green-500" /></button>
      </div>
      <SyntaxHighlighter
        className={" border"}
        showLineNumbers
        language="typescript"
        customStyle={{ background: "transparent", padding: "15px" }}
        style={atelierCaveLight}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
}
