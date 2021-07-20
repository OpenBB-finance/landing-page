import { getLogs, getSingleLog } from "lib/api";
import { useEffect, useMemo, useState } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Link from "next/link";
import CommonLayout from "components/layouts/CommonLayout";
import ReadingProgress from "components/ReadingProgress";

export async function getStaticProps({ params }) {
  const { slug } = params
  let title = slug
  if (/^W(?:[1-9]|[0-4][0-9]|52)_20[0-9][0-9]$/.test(slug)) {
    const [week, year] = slug.slice(1).split("_")
    title = `Week ${week} - ${year}`
  }
  const { code, html_url } = await getSingleLog(slug);
  return {
    props: {
      post: {
        html_url,
        title,
        slug,
        code
      }
    },
  };
}

export async function getStaticPaths() {
  const logs = await getLogs()
  const paths = logs.map(({ name }) => ({ params: { slug: name } }));
  return {
    paths,
    fallback: false,
  };
}

export const components = {
  h1: (props) => (
    <h1
      className="mt-8 mb-4 text-4xl font-extrabold text-gray-900"
      {...props}
    />
  ),
  h2: (props) => (
    <h2 className="mt-8 mb-3 text-3xl font-bold text-gray-900" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-5 text-2xl font-semibold text-gray-900" {...props} />
  ),
  h4: (props) => (
    <h4 className="mt-6 mb-5 text-lg font-semibold text-gray-900" {...props} />
  ),
  p: (props) => <p className="mb-5 leading-7 text-gray-800" {...props} />,
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return (
        <a
          className={"font-medium transition-colors text-primary hover:underline hover:text-primaryDarker"}
          href={href}
          target="_blank"
          rel="noopener"
          {...props}
        />
      )
    }

    return (
      null
    )
  },
  hr: (props) => <hr {...props} />,
  ul: (props) => (
    <ul
      className="mb-4 leading-relaxed text-gray-800 list-disc list-inside"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="pl-10 my-12 leading-7 text-gray-800 list-decimal"
      {...props}
    />
  ),
  li: (props) => <li className="mt-2" {...props} />,
  strong: (props) => <strong className="font-semibold" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="pl-8 my-4 italic font-medium border-l-2 border-gray-200"
      {...props}
    />
  ),
  del: (props) => <del className="line-through" {...props} />,

  // TODO:
  pre: ({ children, ...props }) => {
    return (
      <pre className="" {...props}>
        {children}
      </pre>
    )
  },
  code: ({ children }) => {
    return (
      <code className="px-1.5 py-0.5 text-sm font-mono font-medium text-gray-800 bg-sky-100 rounded-md">
        {children}
      </code>
    )
  },
}

const SingleLog = ({ post }) => {
  const [showReadingProgress, setShowReadingProgress] = useState(false);
  useEffect(() => {
    if (document.body.scrollHeight > 1200) {
      setShowReadingProgress(true);
    }
  }, []);
  const Component = useMemo(() => getMDXComponent(post.code), [post.code]);
  return <CommonLayout>
    {showReadingProgress && <ReadingProgress />}
    <div className="pt-32 max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="pb-8 border-b border-gray-200 text-center overflow-hidden">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">{post.title}</h1>
        <a target="_blank"
          rel="noopener"
          href={post.html_url} className="float-right mt-4 text-right flex justify-end items-center text-primary hover:text-primaryDarker font-semibold hover:underline rounded px-2 py-1">
          <span>Continue to GitHub</span>
          <svg width={12} fill="currentColor" height={12} className="ml-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
            </path>
          </svg>
        </a>
        {/*<p className="mt-4 text-gray-800">{format(new Date(post.date), "mediumDate")}</p>*/}
      </div>
      <div className="mb-10">
        <div className="prose py-8">
          <Component components={components} />
        </div>
        <Link href="/changelog"><a className="text-primary font-semibold hover:underline">Return to changelog</a></Link>
      </div>
    </div>
  </CommonLayout >
}

export default SingleLog