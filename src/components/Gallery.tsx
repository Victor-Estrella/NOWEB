import Gallery1 from "../assets/gallery-1.jpg";
import Gallery2 from "../assets/gallery-2.jpg";
import Gallery3 from "../assets/gallery-3.jpg";

export default function Gallery() {
    const tags = ["Furniture", "Home", "Rent", "100%", "Brand", "Trusted"];

    return (
        <section className="flex items-center justify-center w-full overflow-hidden py-12 gap-4">
            {/* Card esquerdo */}
            <div className="w-258 h-170 rounded-3xl overflow-hidden shrink-0 -ml-86">
                <img src={Gallery1} alt="Left House" className="w-full h-full object-cover" />
            </div>

            {/* Card central */}
            <div className="relative w-332 h-170 rounded-3xl overflow-hidden shrink-0">

                <img src={Gallery2} alt="Main House" className="w-full h-full object-cover" />

                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent z-10" />

                <div className="absolute inset-0 flex py-12 px-24 z-100">
                    {/* Esquerda */}
                    <div className="flex flex-col justify-end gap-4 flex-1">
                        <h2 className="text-white text-5xl leading-16 max-w-100">
                            Perfect Home Is More Than Just A Transaction
                            <span className="inline-block w-28 border-t border-white ml-2 align-middle" />
                        </h2>

                        <div className="flex mt-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-14 h-14 rounded-full bg-[#C2C2C2] border-2 border-black -ml-2 first:ml-0" />
                            ))}
                        </div>
                    </div>

                    {/* Direita */}
                    <div className="flex flex-col justify-end gap-12 items-end">
                        <div className="flex gap-8 mb-2">
                            <div>
                                <p className="text-white text-[51px] font-medium">250+</p>
                                <p className="text-white text-lg font-light">Property Available</p>
                            </div>
                            <div>
                                <p className="text-white text-[51px] font-medium">100+</p>
                                <p className="text-white text-lg font-light">Total Partner</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap max-w-60 justify-self-end mb-4">
                            {tags.map((tag) => (
                                <span key={tag} className="border border-white/30 text-white text-lg font-light px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Card direito */}
            <div className="w-258 h-170  rounded-3xl overflow-hidden shrink-0 -mr-96">
                <img src={Gallery3} alt="Right House" className="w-full h-full object-cover" />
            </div>
        </section>
    );
}