import { getLogs } from "lib/api"
import Link from "next/link"
import { format } from 'fecha';
import ChangelogLayout from "@/components/layouts/ChangelogLayout";
import CommonLayout from "@/components/layouts/CommonLayout";

export const getStaticProps = async () => {
  const allLogs = await getLogs()
  return {
    props: { allLogs },
  }
}

const Changelog = ({ allLogs }) => {
  return <CommonLayout>
    <div className="pt-32 max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="pb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Changelog</h1>
        <p className="mt-4 text-gray-800">Latest news of GamestonkTerminal</p>
      </div>
      <ul className="mt-8 mx-auto max-w-screen-sm lg:max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {allLogs.map(p => <li key={p.name} className="border-2 px-6 py-4 rounded-lg">
          <h2 className="text-xl font-semibold my-2 capitalize">{p.name}</h2>
          {/*<time>{format(new Date(p.date), "mediumDate")}</time>
        <p className="text-gray-500 mt-6 mb-2">{p.description}</p>*/}
          <Link href={`/changelog/${p.name}`}><a className="text-primary font-semibold hover:underline hover:bg-gray-50 rounded border border-primary px-2 py-1">Read more</a></Link>
        </li>
        )}
      </ul>
    </div>
  </CommonLayout>
}

export default Changelog