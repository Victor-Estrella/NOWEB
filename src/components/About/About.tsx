import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
    return (
        <section className="flex flex-col xl:flex-row justify-between lg:px-6 px-12 md:px-24 py-10 md:py-16 items-stretch gap-10 md:gap-0">
            {/* Esquerda */}
            <div className="flex flex-col md:flex-row xl:flex-col gap-10 md:gap-16 justify-center items-center xl:justify-around">
                <div className="flex items-center">
                    <button className="bg-[#D3EDD8] text-[#17412D] font-medium px-8 py-3 rounded-full text-lg cursor-pointer transition-transform duration-200 hover:scale-105 inline-block">
                        About Us
                    </button>
                    <div className="bg-[#D3EDD8] text-[#17412D] font-medium px-4 py-3 rounded-full text-lg rotate-35 transition-transform duration-200 hover:scale-105 inline-block cursor-pointer">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-lg text-[#656971]">Learn more about</p>
                    <p className="text-lg font-medium tracking-tight uppercase text-[#1A1D22] -mt-1">Keepurban</p>
                </div>
            </div>

            {/* Direita */}
            <div className="relative w-full md:max-w-221 lg:p-4 p-6 md:p-8 rounded-lg self-center">
                <p className="text-2xl md:text-3xl bg-linear-to-b from-[#1D2128] to-[#AEAEAE] bg-clip-text text-transparent leading-relaxed text-center xl:text-start">
                    Lorem ipsum dolor sit amet consectetur. Ultrices augue elementum mollis quam magna elementum amet. Iaculis faucibus fames lobortis nunc eget turpis eget quis amet. Bibendum aliquet et id enim molestie.
                </p>
            </div>
        </section>
    );
}