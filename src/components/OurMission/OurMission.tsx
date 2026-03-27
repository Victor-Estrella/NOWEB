import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Imagem1 from "./assets/house1.jpg";
import Imagem2 from "./assets/house2.jpg";
import Imagem3 from "./assets/house3.jpg";
import { faArrowUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { MapPin } from "lucide-react";


export default function OurMission() {

    const topResults = [
        {
            name: "Serenity Marietta Garden Resident",
            location: "Pesona Raya Street, Jakarta",
            price: "$1200/Month",
            image: Imagem2,
            featured: true,
        },
        {
            name: "Reka Citra Purikati Mansion Raya",
            location: "Griya Tambak Asri, Jakarta",
            price: "$1200/Month",
            image: Imagem3,
            featured: false,
        },
    ];

    return (
        <section className="flex flex-col px-6 lg:px-34 py-10 lg:py-16 items-stretch justify-around">
            {/* Cima */}
            <div className="flex flex-col xl:flex-row justify-between gap-8 lg:gap-12 items-stretch">
                <div className="flex flex-col justify-between gap-6 lg:gap-12">
                    <div className="flex flex-row items-center gap-3">
                        <div className="bg-black size-1.5 rounded-full"></div>
                        <p className="font-normal text-[#333333] text-lg">Our Mission</p>
                    </div>
                    <h3 className="font-semibold text-3xl lg:text-5xl max-w-full lg:max-w-150 capitalize text-[#333333] lg:-mb-2">
                        Help You Find Your Dream Home or Sell Your Property with Confidence!
                    </h3>
                </div>

                <div className="flex flex-col items-start justify-end gap-6 lg:gap-10">
                    <p className="font-normal text-xl lg:text-2xl text-black">Decide what you want:</p>
                    <div className="flex items-center gap-4">
                        <button className="bg-[#333333] text-white border border-black font-medium px-7 lg:px-9 py-3 lg:py-4 rounded-full text-base lg:text-lg cursor-pointer transition-transform duration-200 hover:scale-105 inline-block">
                            Buy a House
                        </button>
                        <button className="bg-white text-black border border-[#DDDDDD] font-medium px-7 lg:px-9 py-3 lg:py-4 rounded-full text-base lg:text-lg cursor-pointer transition-transform duration-200 hover:scale-105 inline-block shadow">
                            Sell Your House
                        </button>
                    </div>
                </div>

                <div />
            </div>

            {/* Baixo */}
            <div className="flex flex-col xl:flex-row mt-10 lg:mt-12 justify-around items-stretch gap-8 lg:gap-12">
                {/* Esquerda */}
                <div className="flex flex-col gap-3 lg:-ml-6">
                    <p className="text-xl lg:text-2xl text-[#9B9494] font-normal">
                        Look for a house in your desired location
                    </p>

                    {/* Card Grande */}
                    <div className="relative rounded-3xl overflow-hidden w-full lg:w-209 h-72 lg:h-98 cursor-pointer">
                        <img src={Imagem1} alt="Mutiara Indah Permai Sari Residen" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                        
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />

                        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-black font-semibold text-sm px-4 py-2 rounded-full shadow z-100">
                            $1200/Month
                        </div>
 
                        <div className="absolute bottom-17 right-11 rotate-45 text-white flex items-center justify-center transition-all duration-200 group-hover:bg-white group-hover:text-black z-100">
                            <FontAwesomeIcon icon={faArrowUp} className="text-5xl" />
                        </div>

                        <div className="absolute bottom-5 left-5 text-white">
                            <h4 className="font-semibold text-xl leading-tight max-w-65">
                                Mutiara Indah Permai Sari Residen
                            </h4>
                            <div className="flex items-center gap-1.5 mt-1.5 opacity-80">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="currentColor" />
                                </svg>
                                <span className="text-sm">Pesona Anggrek Mutiara, Jakarta</span>
                            </div>
                        </div>
                    </div>
                </div>
 
                {/* Direita */}
                <div className="flex flex-col gap-3">
                    <p className="text-xl text-[#9B9494] font-normal">Top result</p>
 
                    <div className="flex flex-row gap-4">
                        {topResults.map((property, index) => (
                            <div key={index} className="relative rounded-3xl w-full lg:w-73 h-52 lg:h-65 overflow-hidden cursor-pointer">
                                <img src={property.image} alt={property.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                                
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
 
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#17412D] font-medium text-base lg:text-lg px-6 lg:px-9 py-3 lg:py-4 rounded-full shadow whitespace-nowrap">
                                    {property.price}
                                </div>
                            </div>
                        ))}
                    </div>
 
                    <div className="flex flex-row gap-4">
                        {topResults.map((property, index) => (
                            <div key={index} className="flex-1 ml-2">
                                <div className="flex items-start justify-between">
                                    <h4 className="font-medium text-black text-xl lg:text-2xl leading-tight max-w-50">
                                        {property.name}
                                    </h4>
                                    {property.featured && (
                                        <FontAwesomeIcon icon={faStar} className="text-[#04A904] md:mr-8 lg:mr-24 xl:mr-0 mt-0.5 text-xl shrink-0" />
                                    )}
                                </div>
                                <div className="flex items-center gap-1.5 mt-2.5">
                                    <MapPin size={15} color="black"/>
                                    <span className="text-sm font-light text-black">{property.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>         
        </section>
    )
}