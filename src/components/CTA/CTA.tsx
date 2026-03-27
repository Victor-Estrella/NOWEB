import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CTA() {
    return (
        <section className="relative bg-[url(./components/CTA/assets/cta_img.jpg)] bg-cover bg-center bg-no-repeat w-full h-105 py-12 flex flex-col justify-center items-center gap-6">
            <div className="absolute inset-0 bg-black/60 z-10" />

            <h2 className="text-6xl font-semibold text-white z-100">Sey Hello To Brighter Future Days Together</h2>
            <div className="flex items-center z-100">
                <button className="bg-[#D3EDD8] text-[#17412D] font-medium px-8 py-3 rounded-full text-2xl cursor-pointer transition-transform duration-200 hover:scale-105 inline-block">
                    Get Started
                </button>
                <div className="bg-[#D3EDD8] text-[#17412D] font-medium px-4 py-3 rounded-full text-lg rotate-35 transition-transform duration-200 hover:scale-105 inline-block">
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            </div>
        </section>
    )
}
