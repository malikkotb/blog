"use client";
import { ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  docco,
  atelierDuneDark,
  googlecode,
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


  return (
    <>
      {theme === "light" && (
        <SyntaxHighlighter
          className={"rounded-lg bg-transparent"}
          showLineNumbers
          language="typescript"
          style={googlecode}
        >
          {codeString}
        </SyntaxHighlighter>
      )}
      {theme === "dark" && (
        <SyntaxHighlighter
          className={"rounded-lg bg-transparent"}
          showLineNumbers
          language="typescript"
          style={atelierDuneDark}
        >
          {codeString}
        </SyntaxHighlighter>
      )}
    </>
  );
}
