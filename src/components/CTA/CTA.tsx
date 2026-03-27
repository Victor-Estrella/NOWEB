import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CTA() {
    return (
        <section className="relative bg-[url(./components/CTA/assets/cta_img.jpg)] bg-cover bg-center bg-no-repeat w-full min-h-140 md:h-105  py-12 lg:px-6 px-12 md:px-24 flex flex-col justify-center items-center gap-6">
            <div className="absolute inset-0 bg-black/60 z-10" />

            <h2 className="text-6xl md:text-5xl font-semibold text-white z-100 text-center leading-tight">
                Sey Hello To Brighter Future Days Together
            </h2>
            <div className="flex items-center z-100">
                <button className="bg-[#D3EDD8] text-[#17412D] font-medium lg:px-6 px-8 lg:py-2.5 py-3 rounded-full lg:text-lg text-xl md:text-2xl cursor-pointer transition-transform duration-200 hover:scale-105 inline-block">
                    Get Started
                </button>
                <div className="bg-[#D3EDD8] text-[#17412D] font-medium px-4 py-3 rounded-full text-lg rotate-35 transition-transform duration-200 hover:scale-105 inline-block cursor-pointer">
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            </div>
        </section>
    );
}