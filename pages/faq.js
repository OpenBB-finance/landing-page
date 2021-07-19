import Faq from "components/FAQ"
import CommonLayout from "components/layouts/CommonLayout"
import { getPageContent } from "lib/api"
export async function getStaticProps() {
    const data = getPageContent("faqs.json")
    return {
        props: {
            data
        }
    }
}
const FaqPage = ({ data }) => {
    const { questions, title, description } = data
    return <CommonLayout>
        <div className="pt-32 max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="pb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">{title}</h1>
                <p className="mt-4 text-gray-800">{description}</p>
            </div>
            <Faq questions={questions} />
        </div>
    </CommonLayout>
}

export default FaqPage