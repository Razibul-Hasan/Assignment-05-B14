import logo from "../../assets/logo-text.png";
import { BsJustify } from "react-icons/bs";

const Navbar = () => {
    return (
        <header className="w-full border-b border-gray-200 bg-white">

            <div className="mx-auto flex h-[70px] max-w-[1120px] items-center px-4 md:px-5">

                <div className="flex flex-1 items-center justify-start md:hidden">
                    <button className="text-2xl text-gray-500">
                        <BsJustify />
                    </button>
                </div>


                <div className="flex flex-1 items-center justify-center md:justify-start">
                    <a href="/">
                        <img
                            src={logo}
                            alt="DevStack Logo"
                            className="h-8 w-auto object-contain"
                        />
                    </a>
                </div>

                <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">

                    <a
                        href="#"
                        className="text-[13px] font-medium text-pink-500"
                    >
                        Home
                    </a>

                    <a
                        href="#technologies"
                        className="text-[13px] font-medium text-slate-500"
                    >
                        Technologies
                    </a>

                    <a
                        href="#projects"
                        className="text-[13px] font-medium text-slate-500"
                    >
                        Projects
                    </a>

                    <a
                        href="#about"
                        className="text-[13px] font-medium text-slate-500"
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className="text-[13px] font-medium text-slate-500"
                    >
                        Contact
                    </a>

                </nav>

                <div className="flex flex-1 items-center justify-end gap-3 md:gap-5">

                    <a
                        href="/login"
                        className="whitespace-nowrap text-[10px] font-semibold text-slate-600 md:text-[13px]"
                    >
                        Sign In
                    </a>

                    <a
                        href="/signup"
                        className="
                            whitespace-nowrap
                            rounded-full
                            bg-gradient-to-r
                            from-pink-400
                            to-pink-600
                            px-3
                            py-1.5
                            text-[10px]
                            font-semibold
                            text-white
                            md:px-5
                            md:py-2
                            md:text-[13px]
                        "
                    >
                        Sign Up
                    </a>

                </div>

            </div>

        </header>
    );
};

export default Navbar;