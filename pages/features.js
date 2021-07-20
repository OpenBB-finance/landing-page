import CommonLayout from "@/components/layouts/CommonLayout";
import ReactPlayer from "react-player";


const FeaturesPage = ({ }) => {
    return <CommonLayout>
        <div className="pt-32 max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="pb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Features</h1>
                <p className="mt-4 text-gray-800">Lorem ipsum</p>
            </div>
            <section
                className="w-full flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-y-0 gap-x-36"
            >
                <ReactPlayer
                    width="100%"
                    height="100%"
                    playing={true}
                    muted={true}
                    url="https://anima-uploads.s3.amazonaws.com/projects/60864c68647832aeba3d1520/files/gst-usage.mp4"
                />
                <div className="text-black flex flex-col gap-y-8 w-full p-8">
                    <p className="w-46 md:w-full text-lg sm:text-2xl">
                        As a modern Python-based environment, GamestonkTerminal opens
                        access to numerous Python data libraries in:
                    </p>
                    <ol className="list-disc">
                        <li>
                            <p className="text-primary font-semibold">Data Science</p>
                            <p>Pandas, Numpy, Scipy, Jupyter</p>
                        </li>
                        <li>
                            <p className="text-primary font-semibold">Machine Learning</p>
                            <p>Pytorch, Tensorflow, Sklearn, Flair</p>
                        </li>
                        <li>
                            <p className="text-primary font-semibold">Data acquisition</p>
                            <p>Beautiful Soup & many third-party APIs</p>
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    </CommonLayout >
}

export default FeaturesPage