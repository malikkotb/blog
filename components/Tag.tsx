"use client"
import useStore from "../app/(store)/store"; // Adjust the path to your store file
type TagProps = {
  name: string;
};

export default function Tag({ name }: TagProps) {

  const { setFilteredTag } = useStore();

  const tagClickHandler = (name: string) => {
    let filterTag = name;
      if (filterTag === "All") {
        filterTag = "";
      } 
      setFilteredTag(filterTag);
  }

  return (
    <button onClick={() => tagClickHandler(name)} className="cursor-pointer hover:border-opacity-100 border-opacity-40  px-4 border border-slate-400 py-1.5 rounded-2xl text-sm whitespace-nowrap">
      {name}
    </button>
  );
}
