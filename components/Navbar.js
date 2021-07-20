import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useState } from "react";
import { GithubIcon, MainLogoIcon } from "./Icons";
import MenuButton from "./MenuButton";

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
        className={classNames("font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primary hover:underline", {
            "text-primary": asPath.includes(href)
        }
        )}
    >
        {label}
    </a>
</Link>

const Navbar = () => {
    const { asPath } = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                <div className="lg:hidden mr-4">
                    <MenuButton
                        strokeWidth="4"
                        lineProps={{ strokeLinecap: "round" }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        width="20"
                        height="20"
                        isOpen={isMenuOpen}
                        toggle={setIsMenuOpen}
                        className="cursor-pointer"
                    />
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-0 right-0 mt-12 z-50">
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