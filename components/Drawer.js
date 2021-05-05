import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CloseIcon } from "./Icons";

// The variants for the drawer itself
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" }
};

// The variants for the drawer backdrop overlay
const overlayVariants = {
  open: { opacity: 1, pointerEvents: "auto" },
  closed: { opacity: 0, pointerEvents: "none" }
};


const Drawer =({ toggleOpen, width = 350, isOpen, children }) => {

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
              touchAction: "pan-y"
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
              touchAction: "pan-y"
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
        className="z-10 fixed inset-0 bg-black"
        style={
          {
            "--tw-bg-opacity": 0.4
          }
        }
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={overlayVariants}
        transition={{ type: "tween" }}
        onClick={toggleOpen}
      />

      {/* The element that animates in and out */}
      <motion.div
        ref={drawerRef}
        className="fixed top-0 bottom-0 z-30"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ type: "spring", stiffness: 350, damping: 40 }}
      >
        {/* Adds a "card-like" look to the drawer */}
        <div
          style={{ width }}
          className="bg-primary p-4 h-screen z-50 select-text"
        >
          {/* Aligns the close button to the end */}
          <div className="flex items-center justify-end">
            <button
              onClick={toggleOpen}
              className="hamburger p-1 transform transition-transform hover:scale-125 active:scale-95 focus:outline-none"
            >
              <CloseIcon className="h-8 w-8" />
            </button>
          </div>
          {/* Drawer content */}
          {children}
        </div>
      </motion.div>
    </>
  );
};

export default Drawer