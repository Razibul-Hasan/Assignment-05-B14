import logo from "../../assets/logo-text.png";
import { BsJustify } from "react-icons/bs";



const Navbar = () => {
    return (
        <header className="w-full border-b border-gray-100 bg-white">
            <div
                className="
                    mx-auto grid h-[70px] max-w-[1120px]
                    grid-cols-[1fr_auto_1fr] items-center px-5
                    md:flex
                "
            >
                <div className="flex items-center justify-start md:hidden cursor-pointer">
                    <BsJustify className="text-3xl text-black" />
                </div>

                <a
                    href="/"
                    className="flex items-center justify-center md:justify-start px-5"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-[150px] object-contain md:h-8 md:w-auto "
                    />
                </a>


                <nav className="ml-auto hidden items-center gap-8 md:flex">
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


                <div className="flex items-center gap-4 justify-self-end md:ml-8 md:gap-5">
                    <a
                        href="/login"
                        className="whitespace-nowrap text-[13px] font-semibold text-slate-600"
                    >
                        Sign In
                    </a>

                    <a
                        href="/signup"
                        className="
                            whitespace-nowrap rounded-full
                            bg-gradient-to-r from-pink-400 to-pink-600
                            px-5 py-2 text-[13px] font-semibold
                            text-white shadow-sm
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