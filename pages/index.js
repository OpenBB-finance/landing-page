import Drawer from '@/components/Drawer'
import Header from '@/components/Header'
import { DiscordIcon } from '@/components/Icons'
import { motion } from 'framer-motion'
import Image from "next/image"
import { useCallback, useState } from 'react'

const title = `Gamestonk Terminal is a
DIY, Meme Stock Version of
Bloomberg Terminal`

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  return (
    <>
      <Header isOpen={isOpen} toggleOpen={toggleOpen} />
      <main className="flex flex-col items-center justify-center">
        <section className="relative w-full h-screen">
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                className="focus:outline-none bg-black text-primary w-48 h-16 font-semibold text-lg rounded-full hover:shadow-lg"
              >
                Download Terminal
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                className="focus:outline-none bg-white text-primary w-48 h-16 font-semibold text-lg rounded-full hover:shadow-lg"
              >
                Explore Features
              </motion.button>
            </div>

            <div className="flex mt-6 gap-x-2">
              <DiscordIcon className="w-6" />
              <p className="font-semibold text-sm tracking-wide">Smooth brain? <a className="underline" href="https://discord.gg/FRTFgFX6mu">Join our discord!</a></p>
            </div>
          </div>
        </section>
        <section className="h-screen bg-black w-full flex flex-col sm:flex-row justify-center items-center gap-y-8 sm:gap-y-0 gap-x-36 p-8 sm:p-4">
          <video
            className="w-full sm:w-1/3"
            src="https://anima-uploads.s3.amazonaws.com/projects/60864c68647832aeba3d1520/files/gst-usage.mp4"
            loop
            autoplay="autoplay"
            playsinline
            muted
          ></video>
          <div className="text-white flex flex-col gap-y-8 w-full sm:w-1/3">
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
      </main>
      <Drawer isOpen={isOpen} toggleOpen={toggleOpen}>
        Holla
    </Drawer>
    </>
  )
}
