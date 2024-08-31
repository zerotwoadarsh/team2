import React from 'react'

const Hero1 = () => {
    return (
        <div>
            <section className="bg-gradient-to-b from-black via-gray-800 to-slate-600 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="text-white bg-clip-text text-3xl font-extrabold  sm:text-5xl"
                        >
                            Stay Vigilant,

                            <span className="sm:block">Stay Secure</span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                         Your Ultimate Cybersecurity Companion.
                        </p>

                        <p className="mx-auto mt-2  sm:text-xl/relaxed">
                        Guarding Your Digital World: Proactive Protection with Cyber Watch.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded border border--600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-red-700 hover:text-white  active:text-opacity-75 sm:w-auto"
                                href="https://forms.gle/cctVEdKLeTwANULo7"
                                target="_blank"
                            >
                            Report a cyber crime
                            </a>

                            <a
                                className="block w-full rounded border border-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                                href="#"
                            >
                                Cyber crime in your area 
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero1