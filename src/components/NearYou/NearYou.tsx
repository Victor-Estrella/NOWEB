import CasaProxima from "./assets/house_near.jpg";

export default function NearYou() {
    return (
        <section className="flex flex-col xl:flex-row px-6 lg:px-24 py-10 lg:py-16 items-stretch xl:justify-around gap-10 lg:gap-0">
            {/* Esquerdo */}
            <div className="flex flex-col justify-between gap-8 lg:gap-12">
                <div className="flex flex-row items-center gap-3">
                    <div className="bg-black size-1.5 rounded-full"></div>
                    <p className="font-normal text-lg">Help you find near you</p>
                </div>

                <h3 className="font-medium text-3xl lg:text-5xl max-w-full xl:max-w-120 capitalize lg:-mb-2">
                    Find the most comfortable real estate near you now
                </h3>

                <div className="flex items-center gap-4 lg:mb-8">
                    <button className="bg-[#D3EDD8] text-[#17412D] font-medium px-6 lg:px-8 py-3 rounded-full text-base lg:text-lg cursor-pointer transition-transform duration-200 hover:scale-105 inline-block">
                        Nearest Real Estate
                    </button>
                    <button className="bg-white text-black border border-black font-medium px-6 lg:px-8 py-3 rounded-full text-base lg:text-lg cursor-pointer transition-transform duration-200 hover:scale-105 inline-block">
                        View Property
                    </button>
                </div>
            </div>

            {/* Direito */}
            <div className="relative bg-[url(./components/NearYou/assets/background_near.jpg)] bg-cover bg-center bg-no-repeat w-full xl:w-142 h-72 xl:h-89 rounded-3xl items-center justify-center flex flex-col gap-4">
                <div className="flex flex-col items-center">
                    <img src={CasaProxima} alt="Casa Próxima" className="w-26 h-26 rounded-full object-cover border-7 border-[#17412D]" />
                    <div className="-mt-1 w-0 h-0 border-l-10 border-l-transparent border-t-15 border-t-[#17412D] border-r-10 border-r-transparent"></div>
                </div>
                <div className="bg-[#17412D] rounded-full px-10 py-4 gap-3 flex flex-row items-center">
                    <p className="text-[#F1FFF3] font-medium text-lg">You're Here</p>
                    <div className="bg-[#C2C2C2] size-7"></div>
                </div>
            </div>
        </section>
    );
}