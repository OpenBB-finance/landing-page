import Statistics from "@/components/Statistics";
import { motion } from "framer-motion";
import Image from "next/image";
import CommonLayout from "components/layouts/CommonLayout";
import Testimonials from "@/components/Testimonials";
import Socials from "@/components/Socials";


export async function getStaticProps() {
  const rawResGithub = await fetch("https://api.github.com/repos/GamestonkTerminal/GamestonkTerminal", {
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
  const { presence_count } = await rawResDiscord.json()
  const data = {
    github: {
      url: "https://google.com",
      stars: stargazers_count,
      forks: forks_count,
      contributors: contributors.length,
    },
    discord: {
      url: "https://google.com",
      activeMembers: presence_count
    }
  }
  return {
    props: {
      data
    }
  }
}


export default function Home({ data }) {
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
        <div className="absolute z-10 my-32 px-10 md:px-20 mx-auto w-full">
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
          <p className="mt-4 md:max-w-[50vw] md:my-10">
            Gamestonk Terminal provides a modern Python-based integrated
            environment for investment research, that allows the average-joe
            retail trader to leverage state-of-the-art Data Science and
            Machine Learning technologies.
          </p>
          <Statistics data={data} />
          <div className="flex flex-col md:flex-row gap-8 mt-4 sm:mt-24 md:mt-32 md:w-full md:items-end md:justify-between">
            <Testimonials />
            <Socials />
          </div>
        </div>
      </section>
    </CommonLayout>
  );
}
