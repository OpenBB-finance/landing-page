import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BookIcon,
  BugIcon,
  CloseIcon,
  CodeIcon,
  CogIcon,
  MinimalLogoIcon,
  PencilIcon,
  PlanIcon,
} from "./Icons";
import Link from "next/link";
// The variants for the drawer itself
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

// The variants for the drawer backdrop overlay
const overlayVariants = {
  open: { opacity: 1, pointerEvents: "auto" },
  closed: { opacity: 0, pointerEvents: "none" },
};

const LIST = [
  {
    label: "Installation Guide",
    href: "https://github.com/GamestonkTerminal/GamestonkTerminal#install",
    passHref: true,
    icon: <BookIcon className="w-6" style={{height: 28 + "px"}}/>,
  },
  {
    label: "Troubleshooting Guide",
    href: "https://github.com/GamestonkTerminal/GamestonkTerminal/blob/main/TROUBLESHOOT.md",
    passHref: true,
    icon: <CogIcon className="w-6" style={{height: 28 + "px"}}/>,
  },
  {
    label: "Roadmap",
    href: "https://github.com/GamestonkTerminal/GamestonkTerminal/blob/main/ROADMAP.md",
    passHref: true,
    icon: <PlanIcon className="w-6" style={{height: 28 + "px"}}/>,
  },
  {
    label: "Become a contributor",
    href: "https://github.com/GamestonkTerminal/GamestonkTerminal#contributing",
    passHref: true,
    icon: <CodeIcon className="w-6" style={{height: 28 + "px"}}/>,
  },
  {
    label: "Request a feature",
    href: "https://github.com/GamestonkTerminal/GamestonkTerminal/issues/new?assignees=&labels=new+feature&template=feature_request.md&title=%5BFR%5D",
    passHref: true,
    icon: <PencilIcon className="w-6" style={{height: 28 + "px"}}/>,
  },
  {
    label: "Report a bug",
    href: "https://github.com/GamestonkTerminal/GamestonkTerminal/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D",
    passHref: true,
    icon: <BugIcon className="w-6" style={{height: 28 + "px"}}/>,
  },
];

const Drawer = ({ toggleOpen, width = 350, isOpen, children }) => {
  // Stores whether or not hammer was loaded
  const [hammerLoaded, setHammerLoaded] = useState(false);

  // Gets a reference for the drawer element
  const drawerRef = useRef(null);
  // A reference for the panner element
  const pannerRef = useRef(null);

  // Unfortunately we don't have access to the HammerManager type
  const hammertimeDrawer = useRef();
  const hammertimePanner = useRef();

  // An instance of hammer class
  // Unfortunately we don't have access to the HammerStatic type
  const hammerInstance = useRef();

  // On load
  useEffect(() => {
    /**
     * Asynchronously loads hammer js on client side(it doesn't work with SSR)
     */
    const loadHammer = async () => {
      hammerInstance.current = (await import("hammerjs")).default;

      // Signals that hammer got loaded
      setHammerLoaded(true);
    };

    loadHammer();
  }, []);

  // On hammer load
  useEffect(() => {
    // If hammer got loaded
    if (hammerLoaded) {
      // Gets the class constructor
      const Hammer = hammerInstance.current;
      // If there's a drawer element
      if (drawerRef?.current) {
        if (!hammertimeDrawer?.current) {
          if (Hammer) {
            // Creates an instance of Hammer
            hammertimeDrawer.current = new Hammer(drawerRef.current, {
              touchAction: "pan-y",
            });
          }
        }

        // On swipe left, toggle the drawer
        hammertimeDrawer?.current?.on("swipeleft", toggleOpen);
      }

      // If there's a "panner" element
      if (pannerRef?.current) {
        if (!hammertimePanner?.current) {
          if (Hammer) {
            // Creates an instance of Hammer
            hammertimePanner.current = new Hammer(pannerRef.current, {
              touchAction: "pan-y",
            });
          }
        }

        // On swipe right, toggle the drawer
        hammertimePanner?.current?.on("swiperight", toggleOpen);
      }

      // On unmount
      return () => {
        // Unsubscribe
        hammertimeDrawer?.current?.off("swipeleft", toggleOpen);
        hammertimePanner?.current?.off("swiperight", toggleOpen);
      };
    }

    return () => {};
  }, [toggleOpen, hammerLoaded]);

  return (
    <>
      {/* Just a trigger to open the drawer */}

      {/* Just a trigger to have a swipe right if drawer is closed */}
      <div ref={pannerRef} className="z-20 fixed inset-y-0 p-4" />

      {/* The backdrop overlay that appears behind the drawer */}
      <motion.div
        className="z-50 fixed inset-0 bg-black"
        style={{
          "--tw-bg-opacity": 0.4,
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={overlayVariants}
        transition={{ type: "tween" }}
        onClick={toggleOpen}
      />

      {/* The element that animates in and out */}
      <motion.div
        style={{ zIndex: 999 }}
        ref={drawerRef}
        className="fixed top-0 bottom-0 bg-primary"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ type: "spring", stiffness: 350, damping: 40 }}
      >
        {/* Adds a "card-like" look to the drawer */}
        <div style={{ width }} className="h-screen z-50 select-text">
          {/* Aligns the close button to the end */}
          <button
            onClick={toggleOpen}
            className="absolute top-0 right-0 mr-6 mt-6 hamburger p-1 transform transition-transform hover:scale-125 active:scale-95 focus:outline-none"
          >
            <CloseIcon className="h-8 w-8" />
          </button>
          <MinimalLogoIcon className="w-24 mx-auto mt-20 mb-10" />
          <div className="flex flex-col">
            {LIST.map((link, idx) => (
              <Link passHref={link.passHref} href={link.href} key={idx}>
                <a
                  target="_blank"
                  rel="noopener"
                  className="font-semibold pl-8 py-2 w-full text-lg hover:bg-primaryLighter flex gap-x-4"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Drawer;
