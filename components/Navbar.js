import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "lib/customHooks";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useRef, useState } from "react";
import { GithubIcon, MainLogoIcon } from "./Icons";

const LINKS = [
    {
        label: "Features",
        href: "/features",
    },
    {
        label: "Github Project",
        href: "/github-project",
    },
    {
        label: "Changelog",
        href: "/changelog"
    },
    {
        label: "Showcase",
        href: "/showcase"
    },
    {
        label: "FAQ",
        href: "/faq"
    }
]

const CustomLink = ({ href, label, asPath }) => <Link href={href}>
    <a
        aria-label={label}
        title={label}
        className={classNames("font-medium tracking-wide transition-colors duration-200 hover:text-primary hover:underline", {
            "text-primary": asPath.includes(href),
            "text-gray-700": !asPath.includes(href)
        }
        )}
    >
        {label}
    </a>
</Link>

const Navbar = () => {
    const { asPath } = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsMenuOpen(false));

    return (
        <div className="fixed z-50 bg-white px-4 py-5 w-full md:px-24 lg:px-8 border-b">
            <div className="relative flex items-center justify-between">
                <Link
                    href="/"
                >
                    <a
                        aria-label="Gamestonk Terminal"
                        title="Gamestonk Terminal"
                    >
                        <MainLogoIcon className="w-36" />
                    </a>
                </Link>
                <ul className="items-center hidden space-x-8 lg:flex">
                    {LINKS.map(link => <li key={link.href}>
                        <CustomLink href={link.href} label={link.label} asPath={asPath} />
                    </li>)}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        target="_blank"
                        rel="noopener"
                        href="https://github.com/GamestonkTerminal/GamestonkTerminal"
                        aria-label="Source Code"
                        title="Source Code"
                    >
                        <GithubIcon className="w-10" />
                    </motion.a>
                </ul>
                <div className="lg:hidden mr-4" ref={ref}>
                    <button onClick={setIsMenuOpen} type="button" className="inline-flex items-center justify-between px-2 py-1 font-medium text-gray-700 transition-all duration-500 rounded-md focus:ring ring-primary sm:focus:shadow-outline">
                        <span className="flex-shrink-0">Menu</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 ml-1">
                            <path className={classNames("transition duration-300 ease-in-out origin-center transform", { "rotate-180": isMenuOpen })} fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-0 right-0 mt-12 z-50 w-56">
                                <svg role="button" onClick={() => setIsMenuOpen(false)} className="w-6 h-6 absolute top-4 right-4 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                <nav className="p-5 bg-white border rounded shadow-sm overflow-hidden">
                                    <ul className="space-y-4">
                                        {LINKS.map(link => <li key={link.href}>
                                            <CustomLink href={link.href} label={link.label} asPath={asPath} />
                                        </li>)}
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 1 }}
                                            target="_blank"
                                            rel="noopener"
                                            href="https://github.com/GamestonkTerminal/GamestonkTerminal"
                                            aria-label="Source Code"
                                            title="Source Code"
                                            className="float-right"
                                        >
                                            <GithubIcon className="w-10" />
                                        </motion.a>
                                    </ul>
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div >
    );
};

export default Navbar