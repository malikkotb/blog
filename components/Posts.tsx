import Link from "next/link";

export default function Posts({ posts }: any) {
  return (
    <div className="h-[200vh] w-full grid grid-cols-2">
      {posts.map(
        (
          val: {
            attributes: {
              urlSlug: string;
              description: string;
              title: string;
            };
          },
          i: number
        ) => {
          return (
            <Link  className="m-4 max-h-[50vh] border p-4 rounded-2xl" href={val.attributes.urlSlug} key={i}>
                <div>
                  <h3 className="text-xl">{val.attributes.title}</h3>
                  <p className="">{val.attributes.description}</p>
                </div>
            </Link>
          );
        }
      )}
    </div>
  );
}
