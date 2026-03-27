import House360 from "../assets/house-360.jpg";

const tabs = ["Home", "Interior Design", "Kitchen", "Swimming Pool", "Bedroom", "Bathroom"];

export default function View360() {
    return (
        <section className="flex flex-col items-center py-16 gap-8">
            {/* Título */}
            <h2 className="text-6xl font-semibold text-center text-black leading-tight">
                See More Clearly With <br />
                The <span className="text-[#70D560]">360°</span> <span className="text-black font-normal">Camera</span>
            </h2>

            {/* Tabs */}
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
                {tabs.map((tab) => (
                    <button key={tab} className={`px-5 py-2 rounded-full text-lg font-normal cursor-pointer transition-transform duration-200 hover:scale-105 inline-block ${tab === "Interior Design" ? "bg-white shadow text-black " : ""}`}>
                        {tab}
                    </button>
                ))}
            </div>

            {/* Imagem com bordas curvas */}
            <div className="overflow-hidden w-full">
                <div className="absolute bg-white w-full h-17 [clip-path:ellipse(55%_150%_at_50%_-50%)]"/>
                <img src={House360} alt="360 Camera View" className="w-full object-cover h-150" />
                <div className="absolute bg-white w-full h-17 -mt-12 rotate-180 [clip-path:ellipse(60%_150%_at_50%_-50%)]"/>
            </div>

            {/* Botão */}
            <button className="border border-black text-black px-8 py-2 rounded-full text-xl cursor-pointer transition-transform duration-200 hover:scale-105">
                See More On 360° More
            </button>
        </section>
    );
}