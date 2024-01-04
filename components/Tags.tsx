import React from "react";
import Tag from "./Tag";

export default function Tags(tags: any) {
    console.log(tags.tags[0]);

  return (
    <div className="flex flex-wrap gap-1 my-6">
      {/* TODO: make these links to filter all tutorials by and of course tag each tutorial with >=1 tag */}
      {/* {tags.tags.map((tag: { name: string }) => {
        //    <p className="text-3xl">{tag.name}</p>
        <Tag name={tag.name} />;
      })} */}
      <Tag name="Web Development" />
      <Tag name="Tools" />
      <Tag name="Articles" />
      <Tag name="Videos" />
      <Tag name="Podcasts" />
      <Tag name="Frontend" />
      <Tag name="Backend" />
    </div>
  );
}
