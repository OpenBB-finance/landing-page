import { motion } from "framer-motion";

function kFormatter(num) {
	return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

const Item = ({ number, title, description }) => {
	return <motion.a
		target="_blank"
		rel="noopener"
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 1 }} className="cursor-pointer text-center bg-white rounded-xl shadow">
		<div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full sm:w-12 sm:h-12">
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
		<h6 className="text-xl md:text-4xl font-bold text-primary">{number}</h6>
		<p className="mb-2 font-bold text-md">{title}</p>
		{/*<p className="text-gray-700 text-sm md:text-base">
						{description}
		</p>*/}
	</motion.a>
}

const Statistics = ({ data }) => {
	return (
		<div style={{ maxWidth: "80%" }} className="ml-0 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20 opacity-85">
			{/*<p class="text-center px-3 py-4 mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
				Statistics
	</p>*/}
			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-[600px]">
				<Item title={"GitHub Stars"} number={kFormatter(Number(data.github.stars))} />
				<Item title={"GitHub Contributors"} number={data.github.contributors} />
				<Item title={"GitHub Forks"} number={data.github.forks} />
				<Item title={"Discord online members"} number={data.discord.activeMembers} />
			</div>
		</div>
	);
};

export default Statistics