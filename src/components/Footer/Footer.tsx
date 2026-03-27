import OkHand from "./assets/ok_icon.svg"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Send } from 'lucide-react';

export default function Footer() {


  return (
    <footer className="bg-[#181818] text-white py-16 px-26">
      <div className="flex flex-col mx-auto">
        <div className="flex justify-between items-start mb-12">
          <h1 className="text-5xl font-semibold leading-tight max-w-xl">We Develop And<br />Create Modern Future</h1>

          <div className="relative flex items-start gap-1 mt-2">
            <img src={OkHand} alt="Ok Hand" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <h3 className="font-medium text-2xl mb-3 leading-[120%]">Address</h3>
            <div className="w-24 border-t border-white mb-4" />
            <div className="flex gap-3">
              <span className="mt-1">
                <FontAwesomeIcon icon={faLocationDot} className="text-white text-[16px]" />
              </span>
              <p className="leading-relaxed font-light text-xl">123 Company Name, Street Name,<br />City Name, Country Name – 12345</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-2xl mb-3 leading-[120%]">Say Hello</h3>
            <div className="w-25 border-t border-white mb-4" />
            <div className="flex flex-col gap-3">
              <a href="mailto:Hello@keepubran.estate" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200 group">
                <span >
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-[16px]"/>
                </span>
                <span className="underline underline-offset-2 font-light text-xl">Hello@keepubran.estate</span>
              </a>
              <a href="tel:+88019289234024" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200 group">
                <span className="text-white/40 group-hover:text-white/70 transition-colors">
                  <FontAwesomeIcon icon={faPhone} className="text-white text-[16px]" />
                </span>
                <span className="font-light text-xl">+880 1928 92384024</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-2xl mb-3 leading-[120%]">Newsletter</h3>
            <div className="w-26 border-t border-white mb-4" />
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-5 flex-1">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#6C6C6C] text-[16px]"/>
                <input type="email" placeholder="Enter email address" className="bg-transparent text-black text-sm outline-none w-full placeholder:text-[#6C6C6C]"/>
              </div>
              <button className="bg-[#D3EDD8] hover:bg-[#8fc989] transition-colors duration-200 rounded-full p-3 flex items-center justify-center text-white cursor-pointer">
                <Send color="#17412D" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}