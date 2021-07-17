import { getAllPosts, getSinglePost } from "lib/api";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import ChangelogLayout from "@/components/layouts/ChangelogLayout";
import { format } from "fecha";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const { slug } = params
  const { data, code } = await getSinglePost(slug);
  return {
    props: {
      post: {
        ...data,
        slug,
        code
      }
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

const SingleLog = ({post}) => {
    const Component = useMemo(() => getMDXComponent(post.code), [post.code]);
	return <ChangelogLayout>
    <div className="pb-8 border-b border-gray-200 text-center">
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">{post.title}</h1>
      <p className="mt-4 text-gray-800">{format(new Date(post.date), "mediumDate")}</p>
    </div>
    <div className="">
      <div className="prose py-8">
        <Component />
      </div>
      <Link href="/changelog"><a className="text-primary font-semibold hover:underline">Return to changelog</a></Link>
    </div>
	</ChangelogLayout>
}

export default SingleLog