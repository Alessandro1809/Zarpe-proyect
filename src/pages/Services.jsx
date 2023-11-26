import down from '../assets/down.png'
import { Link } from 'react-scroll';
import download from '../assets/download.png'
import { FormattedMessage } from 'react-intl';
//animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Services = () => {
  return (
    <>
    <section className="pt-10 bg-black">
        <div className="flex items-center justify-center">
            <h2 id='services' className='mb-4 text-2xl font-bold text-center text-transparent lg:font-bold lg:text-6xl lg:mb-16 bg-gradient-to-r from-yellow-400 via-purple-500 to-red-200 bg-clip-text animate-gradient lg:w-96 md:font-bold md:text-3xl md:mb-8 sm:text-2xl sm:font-bold sm:mb-4'data-aos="fade-right"><FormattedMessage id='services' defaultMessage="SERVICES"/></h2>
        </div>
        <div className="flex items-center justify-center">
            <p className="text-white lg:font-semibold lg:text-4xl lg:mb-5 md:text-lg md:font-semibold sm:text-lg" data-aos="fade-right"><FormattedMessage id='serviceCatalog' defaultMessage="Our Service Catalog"/></p>
        </div>
        <div className="flex items-center justify-center md:mb-10 sm:mb-5">
            <h2 className="p-4 mb-4 text-xs text-center text-white lg:font-semibold lg:text-2xl lg:mb-2 sm:text-sm" data-aos="fade-right"><FormattedMessage id='serviceDiscover' defaultMessage="Discover a world of flavors with our specialized bars:"/></h2>
        </div>

            <div className="flex items-center justify-center mb-5"data-aos="fade-right">
                <button  className="flex items-center p-2 text-xs font-semibold transition duration-500 bg-white rounded-sm hover:scale-110 lg:text-sm md:text-sm sm:text-sm">
                <img className='w-6 lg:w-6 md:w-6 sm:w-6' src={download} alt="" />   
                <a className='' href='/MenusZarpe.pdf' download><FormattedMessage id='serviceDownloadMenus' defaultMessage="Download the menus"/></a>
                </button>
            </div>
            
        <article className="flex items-center justify-center p-2 md:p-4 sm:p-4">
            <div className="grid grid-cols-2 gap-2 lg:gap-10 sm:gap-6 md:gap-8">
                
                <div className="p-2 text-black bg-white rounded-lg lg:p-4 lg:w-4/3 md:p-4 sm:p-4"data-aos="fade-right" >
                <div className="flex-col ">
                        <p className='mb-2 font-semibold lg:text-lg md:text-lg'><FormattedMessage id='serviceNachoBar' defaultMessage="Nachos Bar:"/></p>
                        <p className='text-sm font-semibold sm:text-sm lg:text-lg md:text-normal'><FormattedMessage id='serviceNachoDesc' defaultMessage="Enjoy the crunchy texture of nachos with the best sauces."/></p>
                        <div className='flex items-center justify-center mt-2 text-xs font-semibold transition duration-500 hover:scale-105 lg:text-sm md:text-sm sm:text-sm'>
                            <a className='flex items-center text-center' href='/BarraNachos.pdf' download><img className='w-6 lg:w-6 md:w-6 sm:w-6' src={download} alt="" /> <FormattedMessage id='serviceMenu1' defaultMessage="Menu"/></a>
                        </div>
                    </div>
                </div>
                <div className="p-2 text-black bg-white rounded-lg lg:p-4 lg:w-4/3 md:p-4 sm:p-4"data-aos="fade-right" >
                <div className="flex-col ">
                        <p className='mb-2 font-semibold lg:text-lg md:text-lg'><FormattedMessage id='serviceColdCuts' defaultMessage="Cold cuts and Cheeses:"/></p>
                        <p className='text-sm font-semibold sm:text-sm lg:text-lg md:text-normal'><FormattedMessage id='serviceColdCutsDesc' defaultMessage="An exquisite selection for lovers of cold cuts and cheeses."/></p>
                        <div className='flex items-center justify-center mt-2 text-xs font-semibold transition duration-500 hover:scale-105 lg:text-sm md:text-sm sm:text-sm'>
                            <a className='flex items-center text-center' href='/BarraFiambresQuesos.pdf' download><img className='w-6 lg:w-6 md:w-6 sm:w-6' src={download} alt="" /> <FormattedMessage id='serviceMenu2' defaultMessage="Menu"/></a>
                        </div>
                    </div>
                </div>
                <div className="p-2 text-black bg-white rounded-lg lg:p-4 lg:w-4/3 md:p-4 sm:p-4"data-aos="fade-right" >
                <div className="flex-col ">
                        <p className='mb-2 font-semibold lg:text-lg md:text-lg'><FormattedMessage id='serviceCoctail' defaultMessage="Cocktail and Shots Bar: "/></p>
                        <p className='text-sm font-semibold sm:text-sm lg:text-lg md:text-normal'><FormattedMessage id='serviceCoctailDesc' defaultMessage="Elevate your event with our cocktail and shot creations."/></p>
                        <div className='flex items-center justify-center mt-2 text-xs font-semibold transition duration-500 hover:scale-105 lg:text-sm md:text-sm sm:text-sm'>
                            <a className='flex items-center text-center' href='/BarraCocteles.pdf' download><img className='w-6 lg:w-6 md:w-6 sm:w-6' src={download} alt="" /> <FormattedMessage id='serviceMenu3' defaultMessage="Menu"/></a>
                        </div>
                    </div>
                </div>
                
                <div className="p-2 text-black bg-white rounded-lg lg:p-4 lg:w-4/3 md:p-4 sm:p-4"data-aos="fade-right" >
                <div className="flex-col ">
                        <p className='mb-2 font-semibold lg:text-lg md:text-lg '><FormattedMessage id='serviceCrepalets' defaultMessage="Crepalets:"/></p>
                        <p className='text-sm font-semibold sm:text-sm lg:text-lg md:text-normal'><FormattedMessage id='serviceCrepaletsDesc' defaultMessage="Crepalettes are a dream come true for crepe and cookie lovers."/></p>
                        <div className='flex items-center justify-center mt-2 text-xs font-semibold transition duration-500 hover:scale-105 lg:text-sm md:text-sm sm:text-sm'>
                            <a className='flex items-center text-center' href='/BarraCrepaletas.pdf' download><img className='w-6 lg:w-6 md:w-6 sm:w-6' src={download} alt="" /> <FormattedMessage id='serviceMenu4' defaultMessage="Menu"/></a>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-end-3 p-2 text-black bg-white rounded-lg lg:p-4 lg:w-4/3 md:p-4 sm:p-4"data-aos="fade-right" >
                <div className="flex-col text-center">
                        <p className='mb-2 font-semibold lg:text-lg md:text-lg'><FormattedMessage id='serviceSweetSalad' defaultMessage="Sweet or salad snacks bar: "/></p>
                        <p className='text-sm font-semibold sm:text-sm lg:text-lg md:text-normal'><FormattedMessage id='serviceSweetSaladDesc' defaultMessage="Sweet and salty snacks are the perfect combination for any occasion."/></p>
                        <div className='flex items-center justify-center mt-2 text-xs font-semibold transition duration-500 hover:scale-105 lg:text-sm md:text-sm sm:text-sm'>
                            <a className='flex items-center text-center' href='/BarraSaladaODulce.pdf' download><img className='w-6 lg:w-6 md:w-6 sm:w-6' src={download} alt="" /> <FormattedMessage id='serviceMenu5' defaultMessage="Menu"/></a>
                        </div>
                    </div>
                </div>
            </div>
           
        </article>

        <p className="mt-6 text-xs text-center text-white lg:text-lg lg:mt-16 md:mt-8 sm:mt-6 sm:text-lg md:text-lg"data-aos="fade-right"><FormattedMessage id='seviceContact' defaultMessage="Contact us!"/></p>
        <div className='flex justify-center'data-aos="fade-right">
                 <button className='w-auto h-12 mb-8 lg:mb-40 sm:mb-12'>
                     <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={1100}> <img className="w-6 h-auto transition duration-500 md:w-8 lg:w-10 lg:mt-10 hover:scale-125 sm:w-6" src={down} alt="" /></Link>
                  </button>
                 </div>
    </section>
    
    
    </>
  )
}

export default Services;