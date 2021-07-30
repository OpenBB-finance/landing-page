import { motion } from "framer-motion";
import { DiscordIcon2, GithubIcon2 } from "./Icons";

function kFormatter(num) {
	return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

const Item = ({ number, title, url, icon }) => {
	return <motion.a
		target="_blank"
		rel="noopener"
		href={url}
		className="min-w-[10rem] text-sm cursor-pointer text-center bg-white rounded shadow flex items-center flex-col justify-between p-2">
		{icon}
		<h6 className="text-base md:text-2xl font-bold text-primary">{number}</h6>
		<p className="font-semibold text-xs lg:text-sm">{title}</p>
	</motion.a>
}

const Statistics = ({ data }) => {
	return (
		<div className="py-4 md:py-5 md:ml-0 flex md:flex-col overflow-x-scroll hide-scroll-bar" style={{ maxWidth: "80vw" }}>
			<div className="flex flex-nowrap gap-x-8">
				<Item icon={<GithubIcon2
					fill="currentColor"
					width={24}
					className="text-primary my-2"
				/>} title={"GitHub Stars"} number={kFormatter(Number(data.github.stars))} url={data.github.url} />
				<Item icon={<GithubIcon2
					className="text-primary my-2"
					fill="currentColor"
					width={24}
				/>} title={"GitHub Contributors"} number={data.github.contributors} url={data.github.url} />
				<Item icon={<GithubIcon2
					className="text-primary my-2"
					fill="currentColor"
					width={24}
				/>} title={"GitHub Forks"} number={data.github.forks} url={data.github.url} />
				<Item icon={<DiscordIcon2
					className="text-primary my-2"
					fill="currentColor"
					width={24}
				/>} title={"Discord online members"} number={data.discord.activeMembers} url={data.discord.url} />
			</div>
		</div>
	);
};

export default Statistics