import clsx from "clsx";
import { motion } from "framer-motion";
import { useOnClickOutside } from "lib/customHooks";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useRef, useState } from "react";
import { GithubIcon, MainLogoIcon } from "./Icons";
import MenuMobile from "./MenuMobile";

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

const CustomLink = ({ href, label, active }) => <Link href={href}>
    <a
        aria-label={label}
        title={label}
        className={clsx("font-medium tracking-wide transition-colors duration-200 hover:text-primary hover:underline", {
            "text-primary": active,
            "text-gray-700": !active
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
                        <CustomLink href={link.href} label={link.label} active={asPath.includes(link.href)} />
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
                <MenuMobile links={LINKS} CustomLink={CustomLink} asPath={asPath} />
            </div>
        </div >
    );
};

export default Navbar