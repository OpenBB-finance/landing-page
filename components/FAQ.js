import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Item = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="">
			<motion.button
				initial={false}
				//animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
				type="button"
				aria-label="Open item"
				title="Open item"
				className="flex items-center justify-between w-full p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className="text-lg font-medium">{title}</p>
				<svg
					viewBox="0 0 24 24"
					className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
						}`}
				>
					<polyline
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeMiterlimit="10"
						points="2,7 12,17 22,7"
						strokeLinejoin="round"
					/>
				</svg>
			</motion.button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div className="p-4 pt-0" key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: "auto" },
							collapsed: { opacity: 0, height: 0 }
						}}
						transition={{ duration: 0.5, }}
					>
						<p className="text-gray-700">{children}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const Faq = () => {
	return (
		<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
			<div class="max-w-xl sm:mx-auto lg:max-w-2xl">
				<div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
					<div>
						<p class="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
							Frequently Asked Questions
						</p>
					</div>
					<p class="text-base text-gray-700 md:text-lg ">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
					</p>
				</div>
				<div class="space-y-4">
					<Item title="The quick, brown fox jumps over a lazy dog?">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
					</Item>
					<Item title="The first mate and his Skipper too will do?">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
					</Item>
					<Item title="Is the Space Pope reptilian!?">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
					</Item>
					<Item title="How much money you got on you?">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
					</Item>
				</div>
			</div>
		</div>
	);
};

export default Faq