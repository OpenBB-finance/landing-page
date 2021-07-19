import Drawer from "@/components/Drawer";
import Faq from "@/components/FAQ";
import Statistics from "@/components/Statistics";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { DiscordIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player/lazy";
import CommonLayout from "components/layouts/CommonLayout";
import Testimonials from "@/components/Testimonials";
import Socials from "@/components/Socials";

const words = [
  {
    label: "TECHNICAL ANALYSIS",
    top: 30,
    left: 40,
  },
  {
    label: "HIGH SHORT INTEREST",
    top: 20,
    left: 10,
  },
  {
    label: "BEHAVIORAL ANALYSIS",
    top: 60,
    left: 60,
  },
  {
    label: "MACHINE LEARNING",
    top: 60,
    left: 30,
  },
  {
    label: "GENERATE DUE DILIGENCE REPORTS",
    top: 40,
    left: 40,
  },
  {
    label: "TRACK REDDIT STONKS",
    top: 50,
    left: 20,
  },
  {
    label: "DARKPOOLS",
    top: 90,
    left: 60,
  },
  {
    label: "ECONOMIC DATA",
    top: 20,
    left: 50,
  },
  {
    label: "PREDICTION MODELS",
    top: 70,
    left: 20,
  },
  {
    label: "ADVANCED RESEARCH DATA",
    top: 90,
    left: 40,
  },
]

export async function getStaticProps() {
  /*const rawResGithub = await fetch("https://api.github.com/repos/GamestonkTerminal/GamestonkTerminal", {
    method: "GET",
    headers: {
      'Authorization': `token ${process.env.GITHUB_AUTH_TOKEN}`,
    }
  })
  const { stargazers_count, forks_count } = await rawResGithub.json()
  const rawResGithubContrib = await fetch("https://api.github.com/repos/GamestonkTerminal/GamestonkTerminal/contributors?per_page=200", {
    method: "GET",
    headers: {
      'Authorization': `token ${process.env.GITHUB_AUTH_TOKEN}`,
    }
  })
  const contributors = await rawResGithubContrib.json()
  const rawResDiscord = await fetch("https://discord.com/api/guilds/831165782750789672/widget.json")
  const { presence_count } = await rawResDiscord.json()*/
  const data = {
    github: {
      url: "https://google.com",
      stars: 100,//stargazers_count,
      forks: 100,//forks_count,
      contributors: 100//contributors.length,
    },
    discord: {
      url: "https://google.com",
      activeMembers: 100//presence_count
    }
  }
  return {
    props: {
      data
    }
  }
}


export default function Home({ data }) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  return (
    <CommonLayout>
      <section className="relative w-full bg-primary min-h-screen">
        <Image
          className="z-0"
          src="/hero.png"
          layout="fill"
          objectFit="cover"
          objectPosition="right 75%"
        />
        <div className="absolute z-10 my-32 px-10 md:px-20">
          <motion.h1
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            className="font-semibold text-xl md:text-4xl tracking-wide"
          >
            A
            <span className="relative px-2">
              <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-white" />
              <span className="relative inline-block text-black">
                FOSS
              </span>
            </span>
            alternative to Bloomberg Terminal
          </motion.h1>
          <p className="mt-4 md:mt-10 md:max-w-[50vw]">
            Gamestonk Terminal provides a modern Python-based integrated
            environment for investment research, that allows the average-joe
            retail trader to leverage state-of-the-art Data Science and
            Machine Learning technologies.
          </p>
          <Statistics data={data} />
          <div className="flex flex-col justify-between md:flex-row gap-x-12 items-end mt-8 sm:mt-24 md:mt-32 w-full">
            <Testimonials />
            <Socials />
          </div>
        </div>
      </section>
    </CommonLayout>
  );
}
