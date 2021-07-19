const SOCIALS = [
    {
        url: "https://google.com",
        label: "Twitter"
    },
    {
        url: "https://google.com",
        label: "Discord"
    },
    {
        url: "https://google.com",
        label: "LinkedIn"
    }
]

const Item = ({ label, url }) => <li>
    <a href={url} title={label} aria-label={label}
        target="_blank"
        rel="noopener"
        className="bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-primary hover:border-primary hover:bg-primary hover:text-white shadow-md py-2 px-6 inline-block w-full">
        <span className="">{label}</span>
    </a>
</li>

const Socials = () => {
    return <div>
        <p className="font-semibold tracking-wide text-black text-right">
            Socials
        </p>
        <ul className="mt-2 flex gap-8">
            {SOCIALS.map(s => <Item key={s.label} url={s.url} label={s.label} />)}
        </ul>
    </div>
}

export default Socials