import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Item = ({ question, answer, idx }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li className="shadow border select-none cursor-pointer bg-white rounded p-4">
			<motion.button
				initial={false}
				//animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
				type="button"
				aria-label="Open item"
				title="Open item"
				className="group flex items-center justify-between w-full p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h6 className="text-base font-medium text-left">{`${idx}. ${question}`}</h6>
				<button className="group-hover:bg-gray-200 h-7 w-7 rounded text-primaryDarker bg-gray-100 p-2">
					<svg
						viewBox="0 0 24 24"
						style={{ borderRadius: "10%", boxSizing: "content-box" }}
						className={classNames(
							"transform transition-transform duration-200 w-full", {
							'rotate-180': isOpen
						})}
					>
						<polyline
							fill="none"
							stroke="currentColor"
							strokeWidth="3"
							strokeLinecap="round"
							strokeMiterlimit="10"
							points="2,7 12,17 22,7"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</motion.button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div className="p-4 cursor-default" key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: "auto" },
							collapsed: { opacity: 0, height: 0 }
						}}
						transition={{ duration: 0.5, }}
					>
						<p className="text-gray-700 break-all">{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</li>
	);
};

const Faq = ({ questions }) => {
	return (
		<ul className="mt-8 mx-auto max-w-screen-sm lg:max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
			{questions.map((f, idx) => <Item key={idx} idx={idx} answer={f.answer} question={f.question} />)}
		</ul>
	);
};

export default Faq