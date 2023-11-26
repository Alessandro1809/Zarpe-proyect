import down from '../assets/down.png'
import globos from '../assets/globos.png'
import { Link } from 'react-scroll'
import { FormattedMessage } from 'react-intl';
//animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const PageAbout = () => {
  return (
    <>
      <section className='flex justify-center bg-black'>
            <div className='flex-col justify-center'>
            
                <div className='flex items-center justify-center'>
                <h2 id='about' className='text-2xl font-bold text-center text-transparent lg:font-bold lg:text-6xl lg:mb-16 bg-gradient-to-r from-orange-700 via-yellow-300 to-indigo-400 bg-clip-text animate-gradient lg:w-96 md:font-bold md:text-3xl md:mb-8 sm:text-2xl sm:font-bold sm:mb-4' data-aos="fade-right"><FormattedMessage id='aboutUs' defaultMessage="ABOUT US"/></h2>
                </div>
                <div className="flex-col justify-center" data-aos="fade-right">

                  <div className="flex items-center justify-center">
                    <img className="hidden w-10 h-auto transition duration-500 lg:w-18 hover:scale-125 lg:mr-10 md:w-16 sm:w-16 sm:block md:block lg:block" src={globos} alt="" data-aos="fade-right" />
                       <div className='p-5 text-xs text-justify lg:w-7/12 lg:text-2xl md:text-lg sm:text-sm md:w-7/12 sm:w-7/12'>
                       <p className="leading-loose text-white lg:text-center md:text-center sm:text-center " data-aos="fade-right"><FormattedMessage id='aboutFirst' defaultMessage="Welcome to Zarpe, your perfect partner for unforgettable events. We specialize in offering gastronomic experiences unique through our innovative snack bars and catering services. From mini panckakes and cold cuts to nacho bars, cocktails and shots, at Zarpe we carryfun and flavor to your event."/></p>
                       <p className="leading-loose text-white lg:text-center md:text-center sm:text-center " data-aos="fade-right"><FormattedMessage id='aboutSecond' defaultMessage="Zarpe is your perfect companion to make it unforgettable. We will work closely with you to understand your vision and create a dining experience that exceeds expectations."/></p>
                       </div>
                    <img className="hidden w-10 h-auto transition duration-500 lg:w-18 hover:scale-125 lg:mr-10 md:w-16 sm:w-16 sm:block md:block lg:block" src={globos} alt=""data-aos="fade-right" />
                  </div>

                  <p className="text-xs text-center text-white lg:text-lg lg:mt-10 md:text-sm md:mt-5 md:mb-4 sm:text-xs sm:mt-10" data-aos="fade-right"><FormattedMessage id='seeServices' defaultMessage="See our services!"/></p>
                  
                 <div className='flex justify-center'data-aos="fade-right">
                 <button className='w-auto h-12 lg:mb-40 '>
                      <Link activeClass="active" to="services" spy={true} smooth={true} offset={-80} duration={800}><img className="w-6 h-auto transition duration-500 md:w-8 lg:w-10 lg:mt-10 hover:scale-125 sm:w-6" src={down} alt="" /></Link>
                  </button>
                 </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default PageAbout;