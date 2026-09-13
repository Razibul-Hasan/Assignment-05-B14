import logo from "../../assets/logo-text.png";

function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-white">

            <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

                    <div className="text-center md:text-left">
                        <a href="/">
                            <img
                                src={logo}
                                alt="Dev Stack"
                                className="mx-auto h-6 w-auto md:mx-0"
                            />
                        </a>
                        <p className="mt-4 max-w-xs text-xs leading-5 text-gray-500 mx-auto md:mx-0">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>
                        <div className="mt-4 flex justify-center gap-5 text-xs text-gray-700 md:justify-start">

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                LinkedIn
                            </a>

                        </div>

                    </div>
                    <div className="hidden md:block">

                        <h3 className="text-xs font-semibold uppercase text-gray-900">
                            Product
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                Home
                            </a>

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                Technologies
                            </a>

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                Projects
                            </a>

                        </div>

                    </div>
                    <div className="hidden md:block">

                        <h3 className="text-xs font-semibold uppercase text-gray-900">
                            Company
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                About
                            </a>

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                Contact
                            </a>

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                Careers
                            </a>

                        </div>

                    </div>
                    <div className="hidden md:block">

                        <h3 className="text-xs font-semibold uppercase text-gray-900">
                            Legal
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                Terms of Service
                            </a>

                        </div>

                    </div>

                </div>
                <div className="mt-10 border-t border-gray-100 pt-6">

                    <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-400 md:flex-row">
                        <p>
                            © 2026 Dev Stack. All rights reserved.
                        </p>
                        <div className="flex gap-6">

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                Privacy
                            </a>

                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                Terms
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;