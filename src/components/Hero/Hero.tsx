import { faArrowRight, faLocationDot, faBuilding, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MouseHero from "./assets/mouse_hero.svg";
import UnionHero from "./assets/union_hero.svg";

export default function Hero() {
    return (
        <section className="flex flex-col px-24 py-16 gap-12">
            {/* Cima */}
            <div className="flex flex-row justify-between items-stretch">
                {/* Esquerda */}
                <div className="flex flex-col gap-6 max-w-3xl">
                    <div className="flex items-center gap-3">
                        <hr className="w-42 border-[#79797B]" />
                        <p className="text-xl text-[#79797B]">Your Gateway To Dream Homes</p>
                    </div>

                    <h1 className="text-6xl font-semibold leading-tight max-w-full">
                        It's About Finding A Place Where Memories Are Made And Dreams Are Realized
                    </h1>

                    <p className="text-xl text-[#656971] max-w-lg text-nowrap">
                        Lorem ipsum dolor sit amet consectetur. Gravida volutpat adipiscing venenatis et blandit malesuada.
                    </p>
                </div>

                {/* Direita */}
                <div className="flex flex-col items-end justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full border border-black flex items-center justify-center z-10 bg-white">
                            <img src={MouseHero} alt="Mouse" />
                        </div>
                        <div className="w-14 h-14 rounded-full border border-black flex items-center justify-center -ml-3 bg-white">
                            <img src={UnionHero} alt="Union" />
                        </div>
                    </div>

                    <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-base font-medium transition-transform duration-200 hover:scale-105 cursor-pointer">
                        Get in Touch <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>

            {/* Baixo */}
            <div className="flex items-center rounded-full border border-[#DCDADA] shadow-sm overflow-hidden">
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
        </section>
    );
}