import React from 'react'

const Hero2 = () => {
    return (
        <div>

            <section
                className="relative bg-[url(https://media.istockphoto.com/id/1331172529/photo/hacked-by-india.jpg?s=1024x1024&w=is&k=20&c=ZfzkS4IQfevO_vcPgq-960P2mgiHu-F_c-mMlYrAP4M=)] 
                w-100 bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            <strong className="block font-extrabold text-rose-500"> </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed"></p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero2