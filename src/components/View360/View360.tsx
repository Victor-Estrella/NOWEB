import House360 from "./assets/house-360.jpg";

const tabs = ["Home", "Interior Design", "Kitchen", "Swimming Pool", "Bedroom", "Bathroom"];

export default function View360() {
    return (
        <section className="flex flex-col items-center py-10 lg:py-16 gap-6 lg:gap-8">
            {/* Título */}
            <h2 className="text-4xl lg:text-6xl font-semibold text-center text-black leading-tight px-6 lg:px-0">
                See More Clearly With <br />
                The <span className="text-[#70D560]">360°</span> <span className="text-black font-normal">Camera</span>
            </h2>

            {/* Tabs — scroll horizontal no mobile, pill no desktop */}
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full overflow-x-auto max-w-full mx-6 lg:mx-0 scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 lg:px-5 py-2 rounded-full text-base lg:text-lg font-normal cursor-pointer transition-transform duration-200 hover:scale-105 inline-block whitespace-nowrap ${tab === "Interior Design" ? "bg-white shadow text-black" : ""}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Imagem com bordas curvas */}
            <div className="overflow-hidden w-full">
                <div className="absolute bg-white w-full h-10 lg:h-17 [clip-path:ellipse(55%_150%_at_50%_-50%)]" />
                <img src={House360} alt="360 Camera View" className="w-full object-cover h-72 lg:h-180" />
                <div className="absolute bg-white w-full h-10 lg:h-17 -mt-8 lg:-mt-12 rotate-180 [clip-path:ellipse(60%_150%_at_50%_-50%)]" />
            </div>

            {/* Botão */}
            <button className="border border-black text-black px-6 lg:px-8 py-2 rounded-full text-base lg:text-xl cursor-pointer transition-transform duration-200 hover:scale-105">
                See More On 360° More
            </button>
        </section>
    );
}