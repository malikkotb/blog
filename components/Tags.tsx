import Tag from "./Tag";

export default function Tags(tags: any) {
  // console.log(tags.tags.tags[0]);
  return (
    <div className="flex flex-wrap gap-2 my-6">
      <Tag name="All" />
      {tags.tags.tags.map((tag: { name: string }) => {
        return <Tag key={tag.name} name={tag.name} />
      })}
    </div>
  );
}
