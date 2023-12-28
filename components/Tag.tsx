type TagProps = {
  name: string
}
export default function Tag({ name }: TagProps) {
  return (
    <button className="cursor-pointer hover:border-opacity-100 border-opacity-60  px-4 border border-rose-300 py-1.5 rounded-2xl text-sm whitespace-nowrap">
    {name}<span className="text-[8px]">11</span>
  </button>
  );
}
