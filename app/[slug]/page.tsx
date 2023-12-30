import PostBody from "@/components/PostBody";
import { GET_ALL_SLUGS, GET_ALL_POSTS, GET_INDIVIDUAL_POST } from "../graphql/queries";
import graphcms from "@/lib/client";


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  //const posts = await fetch('https://.../posts').then((res) => res.json())

  const posts = await graphcms.request(CONFIGURE_THIS_QUERY_GET_ALL_SLUGSSS)

  // const { data } = await getClient().query({ query: GET_ALL_SLUGS });

  const paths = posts.map((post: { attributes: { urlSlug: any } }) => ({
    slug: post.attributes.urlSlug,
  }));

  return paths;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const posts = await graphcms.request(CONFIGURE_THIS_QUERY_GET_INDIVIDUAL_POST)

  // const { data } = await getClient().query({
  //   query: GET_INDIVIDUAL_POST,
  //   variables: {
  //     slugUrl: slug,
  //   },
  // });
  const post = await data.blogPosts.data[0];
  const title = post.attributes.title;
  const content = await post.attributes.content;
  

  return (
    <div>
      <PostBody title={title} content={content} />
    </div>
  );
}
