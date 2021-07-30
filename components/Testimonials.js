const TESTIMONIALS = [
    {
        author: "VICE",
        excerpt: "Gamestonk Terminal Is a DIY, Meme Stock Version of Bloomberg Terminal",
        link: "https://www.vice.com/en/article/qjp9vp/gamestonk-terminal-is-a-diy-meme-stock-version-of-bloomberg-terminal"
    },
    {
        author: "VICE",
        excerpt: "Gamestonk Terminal Is a DIY, Meme Stock Version of Bloomberg Terminal",
        link: "https://www.vice.com/en/article/qjp9vp/gamestonk-terminal-is-a-diy-meme-stock-version-of-bloomberg-terminal"
    },
    {
        author: "VICE",
        excerpt: "Gamestonk Terminal Is a DIY, Meme Stock Version of Bloomberg Terminal",
        link: "https://www.vice.com/en/article/qjp9vp/gamestonk-terminal-is-a-diy-meme-stock-version-of-bloomberg-terminal"
    }
]

const Item = ({ author, excerpt, link }) => <div className="bg-white text-primary min-w-[15rem] p-2 text-xs md:text-base sm:p-5 shadow-sm overflow-hidden py-2 rounded">
    <h6 className="mb-2 font-semibold leading-5">{author}</h6>
    <p className="text-xs text-gray-900">
        <span className="text-primary text-lg">“</span>{excerpt}<span className="text-primary text-lg">”</span>
    </p>
    <a href={link}
        target="_blank"
        rel="noopener"
        className="font-bold text-sm hover:underline text-right float-right">Read more</a>
</div>


const Testimonials = () => {
    return <div className="md:ml-0 flex md:flex-col overflow-x-scroll hide-scroll-bar" style={{ maxWidth: "80vw" }}>
        <div className="flex flex-nowrap gap-8">
            {TESTIMONIALS.map(t => <Item key={t.link} author={t.author} link={t.link} excerpt={t.excerpt} />)}
        </div>
    </div>
}

export default Testimonials