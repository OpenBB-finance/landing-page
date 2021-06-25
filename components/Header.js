import { motion } from "framer-motion";
import { GithubIcon, MainLogoIcon } from "./Icons";
import MenuButton from "./MenuButton";
function scrollFunction(ref) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    ref.current.style.top = "0";
    ref.current.style.display = "block";
  } else {
    ref.current.style.top = "-50px";
    ref.current.style.display = "none";
  }
}
const Header = ({ isOpen, toggleOpen }) => {
  return (
    <header className="fixed z-40 w-full bg-white flex justify-between items-center px-8 h-24">
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
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        target="_blank"
        rel="noopener"
        href="https://github.com/GamestonkTerminal/GamestonkTerminal"
      >
        <GithubIcon className="w-10" />
      </motion.a>
    </header>
  );
};

export default Header;
