import Partner1 from "./assets/logo1.svg";
import Partner2 from "./assets/logo2.svg";
import Partner3 from "./assets/logo3.svg";
import Partner4 from "./assets/logo4.svg";
import Partner5 from "./assets/logo5.svg";

const stats = [
    {
        label: "Total Workers",
        value: "400+",
        description: "Lorem ipsum dolor sit amet consectetur. Ultrices augue elementum mollis quam magna elementum amet.",
    },
    {
        label: "Years Experience",
        value: "10.8",
        description: "Lorem ipsum dolor sit amet consectetur. Ultrices augue elementum mollis quam magna elementum amet.",
    },
    {
        label: "Real Estate Project",
        value: "780+",
        description: "Lorem ipsum dolor sit amet consectetur. Ultrices augue elementum mollis quam magna elementum amet.",
    },
];

export default function Partners() {
    return (
        <section className="flex flex-col items-center py-10 lg:py-16 xl:pb-0 bg-[#F6F6F4]">
            {/* Logos */}
            <div className="flex flex-row flex-wrap justify-evenly w-full gap-y-4 px-6 lg:px-0">
                <img src={Partner1} alt="Partner 1" className="w-24 lg:w-40 h-20 lg:h-32 object-contain" />
                <img src={Partner2} alt="Partner 2" className="w-24 lg:w-40 h-20 lg:h-32 object-contain" />
                <img src={Partner3} alt="Partner 3" className="w-24 lg:w-40 h-20 lg:h-32 object-contain" />
                <img src={Partner4} alt="Partner 4" className="w-24 lg:w-40 h-20 lg:h-32 object-contain" />
                <img src={Partner5} alt="Partner 5" className="w-24 lg:w-40 h-20 lg:h-32 object-contain" />
            </div>

            {/* Stats */}
            <div className="flex flex-col xl:flex-row flex-wrap w-full">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col w-full gap-4 py-8 lg:py-12 px-8 xl:px-30 flex-1 border-r border-t border-[#D5D9D6]">
                        <p className="text-xl lg:text-2xl text-black">{stat.label}</p>
                        <p className="text-6xl lg:text-[80px] font-semibold text-black">{stat.value}</p>
                        <p className="text-base lg:text-xl text-[#A09C9C] w-full lg:w-87 lg:max-w-87">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}