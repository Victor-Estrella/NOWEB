import Gallery1 from "./assets/gallery-1.jpg";
import Gallery2 from "./assets/gallery-2.jpg";
import Gallery3 from "./assets/gallery-3.jpg";

export default function Gallery() {
    const tags = ["Furniture", "Home", "Rent", "100%", "Brand", "Trusted"];

    return (
        <section className="flex items-center xl:justify-center w-full overflow-hidden py-12 px-3 gap-4">
            {/* Card esquerdo — oculto no mobile */}
            <div className="hidden xl:block w-258 h-170 rounded-3xl overflow-hidden shrink-0 -ml-86">
                <img src={Gallery1} alt="Left House" className="w-full h-full object-cover" />
            </div>

            {/* Card central */}
            <div className="relative w-full xl:w-332 h-120 xl:h-170 mx-auto rounded-3xl overflow-hidden shrink-0 xl:mx-0">
                <img src={Gallery2} alt="Main House" className="w-full h-full object-cover" />

                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent z-10" />

                <div className="absolute inset-0 flex flex-col xl:flex-row py-8 xl:py-12 px-8 xl:px-24 z-100">
                    {/* Esquerda */}
                    <div className="flex flex-col justify-end gap-4 flex-1"> 
                        <h2 className="text-white text-3xl xl:text-5xl leading-tight filter-[drop-shadow(1px_1px_0_black)_drop-shadow(-1px_-1px_0_black)] xl:filter-none  xl:leading-16 max-w-full xl:max-w-100">
                            Perfect Home Is More Than Just A Transaction
                            <span className="xl:inline-block hidden w-14 lg:w-28 border-t border-white ml-2 align-middle" />
                        </h2>

                        <div className="flex mt-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#C2C2C2] border-2 border-black -ml-2 first:ml-0" />
                            ))}
                        </div>
                    </div>

                    {/* Direita */}
                    <div className="flex flex-row xl:flex-col justify-between xl:justify-end gap-4 xl:gap-12 items-end mt-6 xl:mt-0">
                        <div className="flex gap-4 xl:gap-8 mb-0 xl:mb-2">
                            <div>
                                <p className="text-white text-3xl lg:text-[51px] font-medium">250+</p>
                                <p className="text-white text-sm lg:text-lg font-light">Property Available</p>
                            </div>
                            <div>
                                <p className="text-white text-3xl lg:text-[51px] font-medium">100+</p>
                                <p className="text-white text-sm lg:text-lg font-light">Total Partner</p>
                            </div>
                        </div>

                        <div className="hidden xl:flex flex-wrap max-w-60 justify-self-end mb-4">
                            {tags.map((tag) => (
                                <span key={tag} className="border border-white/30 text-white text-lg font-light px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Card direito — oculto no mobile */}
            <div className="hidden xl:block w-258 h-170 rounded-3xl overflow-hidden shrink-0 -mr-96">
                <img src={Gallery3} alt="Right House" className="w-full h-full object-cover" />
            </div>
        </section>
    );
}