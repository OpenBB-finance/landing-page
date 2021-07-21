import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { GithubIcon } from './Icons'

export default function MenuMobile({ links, CustomLink, asPath }) {
    return (
        <div className="lg:hidden mr-4">
            <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                    <>
                        <div>
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black bg-gray-100 hover:bg-gray-200 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 ring-primary focus-visible:ring-opacity-75">
                                Menu
                                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 ml-1">
                                    <path className={clsx("transition duration-300 ease-in-out origin-center transform", { "rotate-180": open })} fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="p-2 w-32 absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {links.map(link => <div className="px-2 py-2" key={link.href}>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <CustomLink href={link.href} label={link.label} active={asPath.includes(link.href) || active} />
                                        )}
                                    </Menu.Item>
                                </div>
                                )}
                                <Menu.Item>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 1 }}
                                        target="_blank"
                                        rel="noopener"
                                        href="https://github.com/GamestonkTerminal/GamestonkTerminal"
                                        aria-label="Source Code"
                                        title="Source Code"
                                        className="float-right"
                                    >
                                        <GithubIcon className="w-10" />
                                    </motion.a>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    )
}