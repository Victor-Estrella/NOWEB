import { faArrowRight, faLocationDot, faBuilding, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MouseHero from "./assets/mouse_hero.svg";
import UnionHero from "./assets/union_hero.svg";

export default function Hero() {
    return (
        <section className="flex flex-col px-6 sm:px-12 md:px-24 py-10 md:py-16 gap-8 md:gap-12">
            {/* Cima */}
            <div className="flex flex-col xl:flex-row justify-between items-stretch gap-8 xl:gap-0">
                {/* Esquerda */}
                <div className="flex flex-col gap-6 max-w-3xl">
                    <div className="flex items-center gap-3">
                        <hr className="w-20 md:w-42 border-[#79797B]" />
                        <p className="text-base md:text-xl text-[#79797B]">Your Gateway To Dream Homes</p>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-full">
                        It's About Finding A Place Where Memories Are Made And Dreams Are Realized
                    </h1>

                    <p className="text-base md:text-xl text-[#656971] max-w-lg text-wrap lg:text-nowrap">
                        Lorem ipsum dolor sit amet consectetur. Gravida volutpat adipiscing venenatis et blandit malesuada.
                    </p>
                </div>

                {/* Direita */}
                <div className="flex flex-row xl:flex-col items-center md:items-end justify-between md:justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-black flex items-center justify-center z-10 bg-white">
                            <img src={MouseHero} alt="Mouse" className="w-5 md:w-auto" />
                        </div>
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-black flex items-center justify-center -ml-3 bg-white">
                            <img src={UnionHero} alt="Union" className="w-5 md:w-auto" />
                        </div>
                    </div>

                    <button className="flex items-center gap-2 bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-medium transition-transform duration-200 hover:scale-105 cursor-pointer">
                        Get in Touch <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>

            {/* Baixo — Search bar */}
            {/* Desktop: fila única */}
            <div className="hidden xl:flex items-center rounded-full border border-[#DCDADA] shadow-sm overflow-hidden">
                <div className="flex items-center gap-3 px-15 py-5 flex-1">
                    <div className="w-10 h-10 rounded-full border border-[#DCDADA] flex items-center justify-center">
                        <FontAwesomeIcon icon={faLocationDot} className="text-[#656971] text-sm" />
                    </div>
                    <div>
                        <p className="font-medium text-xl">Location</p>
                        <p className="text-[#656971] font-light text-lg">Search Location</p>
                    </div>
                </div>
                <div className="h-10 w-12 border-l border-[#F0E5E5]" />

                <div className="flex items-center gap-3 px-15 py-5 flex-1">
                    <div className="w-10 h-10 rounded-full border border-[#DCDADA] flex items-center justify-center">
                        <FontAwesomeIcon icon={faBuilding} className="text-[#656971] text-sm" />
                    </div>
                    <div>
                        <p className="font-medium text-xl">Select Type</p>
                        <p className="text-[#656971] font-light text-lg">Postcode, town, or area</p>
                    </div>
                </div>

                <div className="h-10 w-12 border-l border-[#F0E5E5]" />

                <div className="flex items-center gap-3 px-15 py-5 flex-1">
                    <div className="w-10 h-10 rounded-full border border-[#DCDADA] flex items-center justify-center">
                        <FontAwesomeIcon icon={faMoneyBill1} className="text-[#656971] text-sm" />
                    </div>
                    <div>
                        <p className="font-medium text-xl">Budget</p>
                        <p className="text-[#656971] font-light text-lg">Determine your budget</p>
                    </div>
                </div>

                <div className="flex items-center px-6">
                    <button className="bg-[#D3EDD8] text-[#17412D] font-medium px-8 py-4 rounded-full text-lg transition-transform duration-200 hover:scale-105 inline-block cursor-pointer">
                        Search Property
                    </button>
                </div>
            </div>

            {/* Mobile/Tablet: cards empilhados */}
            <div className="flex xl:hidden flex-col gap-3 border border-[#DCDADA] rounded-3xl shadow-sm overflow-hidden p-2">
                {[
                    { icon: faLocationDot, label: "Location", sub: "Search Location" },
                    { icon: faBuilding, label: "Select Type", sub: "Postcode, town, or area" },
                    { icon: faMoneyBill1, label: "Budget", sub: "Determine your budget" },
                ].map(({ icon, label, sub }, i, arr) => (
                    <div key={label}>
                        <div className="flex items-center gap-3 px-4 py-4">
                            <div className="w-10 h-10 rounded-full border border-[#DCDADA] flex items-center justify-center shrink-0">
                                <FontAwesomeIcon icon={icon} className="text-[#656971] text-sm" />
                            </div>
                            <div>
                                <p className="font-medium text-base">{label}</p>
                                <p className="text-[#656971] font-light text-sm">{sub}</p>
                            </div>
                        </div>
                        {i < arr.length - 1 && <hr className="border-[#F0E5E5] mx-4" />}
                    </div>
                ))}
                <div className="px-4 pb-4 pt-1">
                    <button className="w-full bg-[#D3EDD8] text-[#17412D] font-medium py-3 rounded-full text-base transition-transform duration-200 hover:scale-105 cursor-pointer">
                        Search Property
                    </button>
                </div>
            </div>
        </section>
    );
}