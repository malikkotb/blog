import { getClient } from "@/lib/client";
import { serialize } from "next-mdx-remote/serialize";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "../../graphql/queries";
import { MDXRemote } from "next-mdx-remote";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  //const posts = await fetch('https://.../posts').then((res) => res.json())

  const { data } = await getClient().query({ query: GET_ALL_SLUGS });
  const posts = await data.blogPosts.data;

  const paths = posts.map((post: { attributes: { urlSlug: any } }) => ({
    slug: post.attributes.urlSlug,
  }));

  return paths;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { data } = await getClient().query({
    query: GET_INDIVIDUAL_POST,
    variables: {
      slugUrl: slug,
    },
  });
  const post = await data.blogPosts.data[0];
  const title = post.attributes.title;
  const content = post.attributes.content;
  

  // const post = {
  //   title: data.blogPosts.data[0].attributes.title,
  //   content: data.blogPosts.data[0].attributes.content,
  // };

  console.log(content);
  const html = await serialize(content)

  return (
    <div>
      <div className="text-red-500">{title}</div>
      <div className="text-blue-500">{content}</div>
      {/* <MDXRemote {...html} /> */}
    </div>
  );
}
