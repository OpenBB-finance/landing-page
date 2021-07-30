import { DiscordIcon2, LinkedinLogo, TwitterIcon } from "./Icons"

const SOCIALS = [
    {
        url: "https://google.com",
        label: "Twitter",
        icon: <TwitterIcon className="fill-current text-primary" width={34} />
    },
    {
        url: "https://google.com",
        label: "Discord",
        icon: <DiscordIcon2 className="fill-current text-primary" width={34} />
    },
    {
        url: "https://google.com",
        label: "LinkedIn",
        icon: <LinkedinLogo className="fill-current text-primary" width={34} />
    }
]

const Item = ({ label, url, icon }) => <li>
    <a href={url} title={label} aria-label={label}
        target="_blank"
        rel="noopener"
        className="bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-primary hover:bg-gray-50 shadow-md py-2 px-6 inline-block">
        {icon}
    </a>
</li>

const Socials = () => {
    return <div>
        <p className="font-semibold tracking-wide text-black md:text-right">
            Socials
        </p>
        <div className="mt-2 md:mt-4 md:ml-0 flex md:flex-col overflow-x-scroll hide-scroll-bar">
            <ul className="flex flex-nowrap gap-x-8" style={{ maxWidth: "80vw" }}>
                {SOCIALS.map(s => <Item key={s.label} url={s.url} label={s.label} icon={s.icon} />)}
            </ul>
        </div>
    </div>
}

export default Socials