import VerticalButtons from "../components/VerticalButtons";
import QR from '../assets/ZarpeQR.png'
import en from '../assets/ingles.png'
import es from '../assets/espanol.png'
import { FormattedMessage } from "react-intl";
import useLang from "../hooks/useLang";
//animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const PageContact = () => {

  
const {setLang}= useLang();


  return (
    <>
        <section className="pb-10 bg-black">
            <div className="flex items-center justify-center md:pt-16"data-aos="fade-right">
                <h2 id="contact" className='mb-4 text-2xl font-bold text-center text-transparent lg:font-bold lg:text-6xl lg:mb-16 bg-gradient-to-r from-blue-400 via-yellow-500 to-rose-500 bg-clip-text animate-gradient lg:w-96 md:font-bold md:text-3xl md:mb-8 sm:text-2xl sm:font-bold sm:mb-4'><FormattedMessage id="contact" defaultMessage="CONTACT"/></h2>
            </div>
            <div className="flex items-center justify-center lg:mb-10 md:mb-5">
                <div className="p-4 text-sm text-center lg:text-2xl felx-col md:text-lg sm:text-sm sm:mb-5"data-aos="fade-right">
                <p className="text-white"><FormattedMessage id="contacText" defaultMessage="Follow us on our social networks to stay up to date with our latest creations and events:"/></p>
                
                </div>
            </div>
            
            <VerticalButtons/>

            <div className="flex items-center justify-center">
              <div className="flex-col justify-center mb-4">
              <p className='text-sm text-center text-white lg:text-xl md:text-lg sm:text-lg' data-aos="fade-right"><FormattedMessage id="contactQR" defaultMessage="Scan the code to a quick chat!"/></p>
              <div className="flex items-center justify-center mt-4">
              <img className="w-32 lg:w-44 md:w-44 sm:w-32" src={QR} alt="" data-aos="fade-right"/>
              </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center text-sm text-center sm:text-sm"data-aos="fade-right">
                    <p className="text-white"><FormattedMessage id="contactEvents" defaultMessage="At ZARPE, we transform events into unforgettable experiences."/></p>
                    <p className='text-white'><FormattedMessage id="contactMatch" defaultMessage="Contact us to make your next event unmatched!"/></p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-8"data-aos="fade-right">
                <button className="w-auto h-auto transition duration-500 hover:scale-125" data-language='en-US'
                    value='en-US'
                    onClick={()=>setLang('en-US')}>
                    <img className="w-6 lg:w-10 md:w-8 sm:w-6 " src={en} alt="" />
                </button>
                <button className="w-auto h-auto transition duration-500 hover:scale-125" data-language='es'
                    value='es-MX'
                    onClick={()=>setLang('es-MX')}>
                    <img className="w-6 lg:w-10 md:w-8 sm:w-6" src={es} alt="" />
                </button>
      </div>
        </section>

    </>
  )
}


export default PageContact;