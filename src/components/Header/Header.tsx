import { faCaretDown, faGlobe, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-around py-14">
            <div>
                <h1 className="text-3xl font-extrabold">NOWEB</h1>
            </div>
            <div>
                <ul className="flex flex-row gap-12"> 
                    <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Home</li>
                    <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Property <FontAwesomeIcon icon={faCaretDown} /></li>
                    <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Product</li>
                    <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Contact</li>
                    <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Communities</li>
                </ul>
            </div>
            <br />
            <div className="flex flex-row items-center gap-4">
                <div className="flex flex-row items-center gap-1 border-r pr-2 border-[#E6E6E6] cursor-pointer">
                    <FontAwesomeIcon icon={faGlobe} className="text-[#656971]"/>
                    <p className="text-[#656971]">EN</p>
                </div>
                <div className="flex flex-row items-center gap-5 cursor-pointer">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black"/>
                    <FontAwesomeIcon icon={faUser} className="text-black"/>
                </div>
            </div>
        </header>
    );
}