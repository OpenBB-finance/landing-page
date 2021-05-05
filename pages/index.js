import Header from '@/components/Header'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from "next/image"
const title = `Gamestonk Terminal is a
DIY, Meme Stock Version of
Bloomberg Terminal`
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <section className="relative w-full h-screen">
          <Image 
          className="h-96 z-0" 
          src="/hero.png" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="right 75%" />
          <div className="absolute z-10 p-10 md:p-20">
            <motion.h1 initial={{x: -200}} animate={{x: 0}} className="font-semibold text-xl md:text-4xl tracking-wide md:w-96">{title}</motion.h1>
            <h4 className="italic text-xl mt-4">- VICE</h4>
            <p style={{maxWidth: 600}} className="mt-4">Gamestonk Terminal provides a modern Python-based integrated environment for investment research, that allows the average-joe retail trader to leverage state-of-the-art Data Science and Machine Learning technologies.</p>
            <p className="mt-4 tracking-tight italic font-semibold">#weliketheterminal</p>

            <div className="mt-8 md:mt-16 flex flex-col gap-y-6 md:flex-row md:gap-x-8">
              <motion.button 
              whileHover={{scale: 1.05}}
              whileTap={{scale: 1}}
              className="focus:outline-none bg-black text-primary w-48 h-16 font-semibold text-lg rounded-full"
              >
                Download Terminal
              </motion.button>
              <motion.button 
              whileHover={{scale: 1.05}}
              whileTap={{scale: 1}}
              className="focus:outline-none bg-white text-primary w-48 h-16 font-semibold text-lg rounded-full"
              >
                Explore Features
              </motion.button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
