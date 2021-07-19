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
        {allLogs.map(p => <li className="">
          <Link href={`/changelog/${p.name}`}>
            <a className="group shadow border select-none cursor-pointer bg-white rounded flex flex-1 items-center p-4">
              <h2 className="flex-1 pl-1 md:mr-16 capitalize font-semibold">
                {p.name}
              </h2>
              <button className="text-right flex justify-end items-center text-primary group-hover:text-primaryDarker font-semibold group-hover:underline rounded px-2 py-1">
                <span>Read more</span>
                <svg width={12} fill="currentColor" height={12} className="ml-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                  </path>
                </svg>
              </button>
            </a>
          </Link>
        </li>
        )}
      </ul>
    </div>
  </CommonLayout >
}

export default Changelog