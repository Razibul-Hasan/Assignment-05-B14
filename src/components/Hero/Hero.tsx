import heroImage from "../../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="bg-white">
            <div
                className="
                    mx-auto flex max-w-[1120px]
                    flex-col items-center
                    px-5 py-3
                    md:min-h-75
                    md:flex-row
                    md:justify-between
                    md:py-3
                "
            >
                <div
                    className="
                        w-full text-center
                        md:max-w-[520px]
                        md:text-left
                    "
                >
                    <h1
                        className="
                            text-[28px] font-bold leading-[1.05]
                            tracking-[-0.03em] text-slate-950
                            sm:text-[34px]
                            md:text-[44px]
                        "
                    >
                        Build Your Ideal
                        <br />
                        <span
                            className="
                                bg-gradient-to-r
                                from-orange-500
                                via-pink-500
                                to-purple-600
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Development Stack
                        </span>
                    </h1>

                    <p
                        className="
                            mx-auto mt-4 max-w-[500px]
                            text-[14px] leading-6
                            text-slate-500
                            md:mx-0
                            md:text-[15px]
                        "
                    >
                        Explore frontend, backend, database, and tooling options, compare
                        them side by side, and put together the stack that fits your next
                        project.
                    </p>

                    <div
                        className="
                            mt-6 flex w-full gap-3
                            md:w-auto
                        "
                    >
                        <a
                            href="#technologies"
                            className="
                                flex-1 rounded-lg
                                bg-gradient-to-r
                                from-orange-500
                                to-pink-500
                                px-5 py-3
                                text-center
                                text-[13px]
                                font-medium
                                text-white
                                shadow-sm
                                md:flex-none
                            "
                        >
                            Explore Technologies
                        </a>

                        <a
                            href="#learn"
                            className="
                                flex-1 rounded-lg
                                border border-slate-200
                                bg-white
                                px-5 py-3
                                text-center
                                text-[13px]
                                font-medium
                                text-slate-600
                                md:flex-none
                            "
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div
                    className="
                        mt-8 flex w-full
                        justify-center
                        md:mt-0
                        md:w-[44%]
                        md:justify-end
                    "
                >
                    <img
                        src={heroImage}
                        alt="Development Stack"
                        className="
                            w-[285px]
                            max-w-full
                            object-cover
                            sm:w-[320px]
                            md:w-[360px]
                            lg:w-[390px]
                        "
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
