import CommonLayout from "@/components/layouts/CommonLayout";

export const getStaticProps = async () => {
    return {
        props: {},
    }
}

const FeaturesPage = ({ }) => {
    return <CommonLayout>
        <div className="pt-32 max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="pb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Features</h1>
                <p className="mt-4 text-gray-800">Lorem ipsum</p>
            </div>

        </div>
    </CommonLayout >
}

export default FeaturesPage