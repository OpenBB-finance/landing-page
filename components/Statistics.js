import { motion } from "framer-motion";

function kFormatter(num) {
	return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

const Item = ({ number, title, url, description }) => {
	return <motion.a
		target="_blank"
		rel="noopener"
		href={url}
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 1 }} style={{ width: "15rem" }} className="cursor-pointer text-center bg-white rounded-xl shadow">
		<div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 rounded-full sm:w-12 sm:h-12">
			<svg
				className="w-8 h-8 text-primary sm:w-10 sm:h-10"
				stroke="currentColor"
				viewBox="0 0 52 52"
			>
				<polygon
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
					fill="none"
					points="29 13 14 29 25 29 23 39 38 23 27 23"
				/>
			</svg>
		</div>
		<h6 className="text-xl md:text-2xl font-bold text-primary">{number}</h6>
		<p className="mb-2 font-bold text-sm lg:text-lg">{title}</p>
		{/*<p className="text-gray-700 text-sm md:text-base">
						{description}
		</p>*/}
	</motion.a>
}

const Statistics = ({ data }) => {
	return (
		<div className="px-4 py-8 mx-auto md:ml-0 max-w-xl">
			<div className="grid grid-cols-4 gap-10 lg:grid-cols-2">
				<Item title={"GitHub Stars"} number={kFormatter(Number(data.github.stars))} url={data.github.url} />
				<Item title={"GitHub Contributors"} number={data.github.contributors} url={data.github.url} />
				<Item title={"GitHub Forks"} number={data.github.forks} url={data.github.url} />
				<Item title={"Discord online members"} number={data.discord.activeMembers} url={data.discord.url} />
			</div>
		</div>
	);
};

export default Statistics