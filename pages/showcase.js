import CommonLayout from "components/layouts/CommonLayout"
import { getPageContent } from "lib/api"

export async function getStaticProps() {
    const data = getPageContent("showcase.json")
    return {
        props: {
            data
        }
    }
}

const ShowcasePage = ({ data }) => {
    return <CommonLayout>
        <div className="pt-32 max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="pb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Showcase</h1>
                <p className="mt-4 text-gray-800">Awesome stuff with GamestonkTerminal</p>
            </div>
            <div className="pb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Mentions</h1>
                <p className="mt-4 text-gray-800">Where gamestonkterminal lorem</p>
            </div>
        </div>
    </CommonLayout>
}

export default ShowcasePage