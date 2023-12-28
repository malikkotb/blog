import { getClient } from "@/lib/client";

import { GET_ALL_SLUGS } from "../graphql/queries";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    //const posts = await fetch('https://.../posts').then((res) => res.json())
   
    const { data } = await getClient().query({ query: GET_ALL_SLUGS });
    const posts = await data.blogPosts.data;

    return posts.map((post: { attribute: { urlSlug: any; }; }) => ({
      slug: post.attribute.urlSlug,
    }))
  }
   
  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

  }
