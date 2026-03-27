import { faCaretDown, faGlobe, faMagnifyingGlass, faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative">
            {/* Barra principal */}
            <div className="flex flex-row items-center justify-between lg:justify-around py-8 lg:py-14 px-6 lg:px-0">
                {/* Logo */}
                <h1 className="text-3xl font-extrabold">NOWEB</h1>

                {/* Nav — desktop */}
                <nav className="hidden lg:block">
                    <ul className="flex flex-row gap-12">
                        <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Home</li>
                        <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Property <FontAwesomeIcon icon={faCaretDown} /></li>
                        <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Product</li>
                        <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Contact</li>
                        <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Communities</li>
                    </ul>
                </nav>

                {/* Ações direita */}
                <div className="flex flex-row items-center gap-4">
                    <div className="hidden lg:flex flex-row items-center gap-1 border-r pr-2 border-[#E6E6E6] cursor-pointer">
                        <FontAwesomeIcon icon={faGlobe} className="text-[#656971]" />
                        <p className="text-[#656971]">EN</p>
                    </div>
                    <div className="hidden lg:flex flex-row items-center gap-5 cursor-pointer">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black" />
                        <FontAwesomeIcon icon={faUser} className="text-black" />
                    </div>

                    {/* Hamburger — mobile */}
                    <button
                        className="lg:hidden text-black text-2xl cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            {menuOpen && (
                <nav className="lg:hidden absolute top-full left-0 w-full bg-white z-50 shadow-md border-t border-[#E6E6E6]">
                    <ul className="flex flex-col px-6 py-4 gap-5">
                        <li className="cursor-pointer py-1 border-b border-[#F0F0F0]">Home</li>
                        <li className="cursor-pointer py-1 border-b border-[#F0F0F0]">Property <FontAwesomeIcon icon={faCaretDown} /></li>
                        <li className="cursor-pointer py-1 border-b border-[#F0F0F0]">Product</li>
                        <li className="cursor-pointer py-1 border-b border-[#F0F0F0]">Contact</li>
                        <li className="cursor-pointer py-1 border-b border-[#F0F0F0]">Communities</li>
                        <li className="flex items-center justify-between gap-4 py-1">
                            <div className="flex items-center gap-1 cursor-pointer text-[#656971]">
                                <FontAwesomeIcon icon={faGlobe} />
                                <span>EN</span>
                            </div>
                            <div className="flex items-center gap-5">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black cursor-pointer" />
                                <FontAwesomeIcon icon={faUser} className="text-black cursor-pointer" />
                            </div>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}