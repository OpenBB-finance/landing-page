import { motion } from "framer-motion"
import Image from "next/image"
import { useCallback, useState } from "react"
import Drawer from "./Drawer"
import { GithubIcon, HamburguerIcon, MainLogoIcon } from "./Icons"
import MenuButton from "./MenuButton"

const Header = ({ isOpen, toggleOpen }) => {
    return <header className="fixed z-50 w-full bg-white flex justify-between items-center px-8 h-24">
        <MenuButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            isOpen={isOpen}
            onClick={toggleOpen}
            strokeWidth="3.2"
            transition={{ ease: "easeOut", duration: 0.2 }}
            width="45"
            height="16.88"
        />
        <MainLogoIcon className="w-40" />
        <motion.a whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }} target="_blank" rel="noopener" href="https://github.com/DidierRLopes/GamestonkTerminal">
            <GithubIcon className="w-10" />
        </motion.a>
    </header>
}

export default Header