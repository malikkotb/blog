import PostBody from "@/components/PostBody";
import { GET_ALL_SLUGS, GET_POST_BY_SLUG } from "../../graphql/queries";
import graphcms from "@/lib/client";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts: any = await graphcms.request(GET_ALL_SLUGS);
  const paths = posts.posts.map((post: { slug: any }) => ({
    slug: post.slug,
  }));
  return paths;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const posts: any = await graphcms.request(GET_POST_BY_SLUG, { slug: slug });

  const post = await posts.posts[0]; // the individual post
  const { title, author, datePublished, coverPhoto, subtitle, description, mdContent } = await post;
  return (
    <div>
      <PostBody
        title={title}
        subtitle={subtitle}
        mdContent={mdContent}
        coverPhotoSrc={coverPhoto?.url}
        author={author.name}
        avatar={author.avatar.url}
        datePublished={datePublished}
        description={description}
      />
    </div>
  );
}
