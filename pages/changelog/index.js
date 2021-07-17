import { getAllPosts } from "lib/api"
import Link from "next/link"
import { format } from 'fecha';
import ChangelogLayout from "@/components/layouts/ChangelogLayout";

export const getStaticProps = async () => {
  const allPosts = getAllPosts()

  return {
    props: { allPosts },
  }
}

const Changelog = ({ allPosts }) => {
  return <ChangelogLayout>
    <div className="pb-8 border-b border-gray-200">
      <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Changelog</h1>
      <p className="mt-4 text-gray-800">Latest news of GamestonkTerminal</p>
    </div>
    <ul className="flex flex-col divide-y divide-gray-200 mb-20">
      {allPosts.map(p => <li key={p.slug} className="p-6">
        <h2 className="text-xl font-semibold my-2">{p.title}</h2>
        <time>{format(new Date(p.date), "mediumDate")}</time>
        <p className="text-gray-500 mt-6 mb-2">{p.description}</p>
        <Link href={`/changelog/${p.slug}`}><a className="text-primary font-semibold hover:underline">Read more</a></Link>
        </li>
        )}
    </ul>
  </ChangelogLayout>
}

export default Changelog