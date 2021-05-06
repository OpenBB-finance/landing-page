import Drawer from '@/components/Drawer'
import Header from '@/components/Header'
import { DiscordIcon } from '@/components/Icons'
import { motion } from 'framer-motion'
import Image from "next/image"
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/lazy'

const title = `Gamestonk Terminal is a
DIY, Meme Stock Version of
Bloomberg Terminal`

const words = [
  {
    label: "TECHNICAL ANALYSIS",
    top: 30,
    left: 40
  },
  {
    label: "HIGH SHORT INTEREST",
    top: 20,
    left: 10
  },
  {
    label: "BEHAVIORAL ANALYSIS",
    top: 60,
    left: 60
  },
  {
    label: "MACHINE LEARNING",
    top: 60,
    left: 30
  },
  {
    label: "GENERATE DUE DILIGENCE REPORTS",
    top: 40,
    left: 40
  },
  {
    label: "TRACK REDDIT STONKS",
    top: 50,
    left: 20
  },
  {
    label: "DARKPOOLS",
    top: 90,
    left: 60
  },
  {
    label: "ECONOMIC DATA",
    top: 20,
    left: 50
  },
  {
    label: "PREDICTION MODELS",
    top: 70,
    left: 20
  },
  {
    label: "ADVANCED RESEARCH DATA",
    top: 90,
    left: 40
  },
]


export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  return (
    <>
      <Header isOpen={isOpen} toggleOpen={toggleOpen} />
      <main className="flex flex-col items-center justify-center">
        <section className="relative w-full h-screen bg-primary">
          <Image
            className="z-0"
            src="/hero.png"
            layout="fill"
            objectFit="cover"
            objectPosition="right 75%" />
          <div className="absolute z-10 mt-20 p-10 md:p-20">
            <motion.h1 initial={{ x: -200 }} animate={{ x: 0 }} className="font-semibold text-xl md:text-4xl tracking-wide md:w-96">{title}</motion.h1>
            <h4 className="italic text-xl mt-4">- VICE</h4>
            <p style={{ maxWidth: 600 }} className="mt-4">Gamestonk Terminal provides a modern Python-based integrated environment for investment research, that allows the average-joe retail trader to leverage state-of-the-art Data Science and Machine Learning technologies.</p>
            <p className="mt-4 tracking-tight italic font-semibold">#weliketheterminal</p>

            <div className="mt-8 md:mt-16 flex flex-col gap-y-6 sm:flex-row sm:gap-x-8">
              <Link passHref href="https://github.com/DidierRLopes/GamestonkTerminal">
                <motion.a
                  target="_blank" rel="noopener"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                  className="focus:outline-none bg-black text-primary w-48 h-16 font-semibold text-lg rounded-full hover:shadow-lg flex items-center justify-center"
                >
                  Check Code
              </motion.a>
              </Link>
              <Link passHref href="https://github.com/DidierRLopes/GamestonkTerminal/tree/main/gamestonk_terminal">
                <motion.a
                  target="_blank" rel="noopener"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                  className="focus:outline-none bg-white text-primary w-48 h-16 font-semibold text-lg rounded-full hover:shadow-lg flex items-center justify-center"
                >
                  Explore Features
              </motion.a>
              </Link>
            </div>

            <div className="flex mt-6 gap-x-2">
              <DiscordIcon className="w-6" />
              <p className="font-semibold text-sm tracking-wide">Smooth brain? <a
              target="_blank" rel="noopener"  
              className="underline" 
              href="https://discord.gg/FRTFgFX6mu">Join our discord!</a></p>
            </div>
          </div>
        </section>
        <section style={{ height: "100vh" }} className="bg-black w-full flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-y-0 gap-x-36">
         <div
            className="w-full md:w-1/3"
            ref={ref}
          >
            <ReactPlayer
              style={{ maxWidth: "100vw", marginLeft: "auto", marginRight: "auto" }}
              playing={inView}
              muted={true}
              url="https://anima-uploads.s3.amazonaws.com/projects/60864c68647832aeba3d1520/files/gst-usage.mp4" />
          </div>
          <div className="text-white flex flex-col gap-y-8 w-full md:w-1/3 p-8">
            <p className="w-46 text-lg sm:text-2xl">As a modern Python-based environment, GamestonkTerminal opens access to numerous Python data libraries in:</p>
            <div>
              <div>
                <p className="text-primary">Data Science</p>
                <p>Pandas, Numpy, Scipy, Jupyter</p>
              </div>
              <div>
                <p className="text-primary">Machine Learning</p>
                <p>Pytorch, Tensorflow, Sklearn, Flair</p>
              </div>
              <div>
                <p className="text-primary">Data acquisition</p>
                <p>Beautiful Soup & many third-party APIs</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black text-white w-full flex justify-center flex-col items-center mt-20 md:mt-0" style={{ height: "80vh" }}>
          <div className="mx-auto flex flex-col">
            <h4 className="text-3xl font-semibold text-center tracking-wide">AN INFORMED APE, IS A STRONG APE</h4>
            <p className="text-lg text-center mx-auto">Together, We Are Even Stronger.</p>
          </div>
          <div
            className="radial grid grid-cols-1 overflow-y-auto gap-y-4 md:grid-cols-3 mt-8 mx-auto"
            style={{
              fontWeight: 'bold',
              padding: 5,
              width: '100%',
              height: '50%'
            }}>
            {words.map((w, idx) => <motion.p
              style={{
                /*position: "absolute",
                top: `${w.top}%`,
                left: `${w.left}%`,*/
              }}
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="mx-auto w-64 h-14 flex items-center justify-center px-2 py-1 font-semibold uppercase border-4 rounded-full border-primary text-primary text-center">
              {w.label}
            </motion.p>
            )}
          </div>
          <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-8 my-8">
            <Link passHref href="https://github.com/DidierRLopes/GamestonkTerminal#install">
              <motion.a
              target="_blank" rel="noopener"  
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                className="focus:outline-none bg-primary text-white w-48 h-16 font-semibold text-lg rounded-full hover:shadow-lg flex items-center justify-center"
              >
                Installation Guide
              </motion.a>
            </Link>
            <Link passHref href="https://github.com/DidierRLopes/GamestonkTerminal#contributing">
              <motion.a
              target="_blank" rel="noopener"  
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                className="focus:outline-none bg-white text-primary w-48 h-16 font-semibold text-lg rounded-full hover:shadow-lg flex items-center justify-center"
              >
                Become a contributor
              </motion.a>
            </Link>
          </div>
        </section>
        <section className="bg-black text-white w-full flex justify-center flex-col items-center relative" style={{ height: "60vh" }}>
          <Image
            className="z-0 img-grayscale opacity-50"
            src="/monkey_space.png"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
          <div className="absolute z-10 mt-20 p-10 md:p-20">
            <h2 style={{ letterSpacing: "0.2em" }} className="text-5xl text-center">THIS IS OUR WAY.</h2>
          </div>
        </section>
      </main>
      <Drawer isOpen={isOpen} toggleOpen={toggleOpen}>
        Holla
    </Drawer>
    </>
  )
}
