import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <header className="bg-black">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <Link className="block text-white dark:text-teal-300" to="/">
                                <svg width="250" height="60" xmlns="http://www.w3.org/2000/svg">
                                    <text x="10" y="40" fontFamily="'Courier New', Courier, monospace" fontSize="30" fill="white" fontWeight="bold">
                                        CyberWatch
                                    </text>
                                </svg>


                            </Link>
                        </div>
                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <Link className="text-white transition hover:text-gray-500/75" to="/feed">
                                            Feed
                                        </Link>

                                    </li>

                                    <li>
                                        <Link className="text-white transition hover:text-gray-500/75" to="/submit">
                                            Submit
                                        </Link>

                                    </li>

                                    <li>
                                        <Link className="text-white transition hover:text-gray-500/75" to="/history">
                                            History
                                        </Link>

                                    </li>

                                    <li>

                                        <Link className="text-white transition hover:text-gray-500/75" to="/analysis">
                                            Analysis
                                        </Link>

                                    </li>

                                    <li>
                                        <Link className="text-white transition hover:text-gray-500/75" to="/help">
                                            Help
                                        </Link>

                                    </li>
                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="rounded-md bg-teal-600 px-3 py-1.5 text-sm font-medium text-white shadow"
                                        href="https://forms.gle/cctVEdKLeTwANULo7"
                                        target="_blank"
                                    >
                                        Report Cyber Crime
                                    </a>
                                </div>

                                <div className="block md:hidden">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <nav className="bg-black md:hidden">
                        <ul className="p-4 space-y-4 text-sm">
                            <li>
                                <a
                                    className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Feed
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Submit
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    History
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Analysis
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Help
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Navbar;
