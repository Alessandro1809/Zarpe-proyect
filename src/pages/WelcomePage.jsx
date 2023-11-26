 //pagina de inicio
import ContactButtons from "../components/ContactButtons";
import down from '../assets/down.png'
import { Link } from "react-scroll";
import Logo from '../assets/Zarpe.jpg'
import { FormattedMessage } from "react-intl";
//animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

 const WelcomePage = () => {
  return (
    <>
        <section className='flex justify-center bg-black lg:pt-32 md:pt-16'>
            
            <div className='flex-col justify-center' >
                
          
                
                <div className="flex justify-center mb-4 sm:hidden md:hidden lg:hidden" data-aos="fade-left">
                <img className='block h-auto w-44 lg:h-auto lg:w-72 md:w-52 md:h-auto sm:h-auto sm:w-32 lg:hidden md:hidden sm:hidden' src={Logo} alt="Zarpe Logo" />
                </div>

            

                <h1 id="home" className='p-2 mb-8 text-3xl font-bold text-center text-transparent lg:font-semibold lg:text-6xl lg:mb-44 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text animate-gradient md:font-semibold md:text-4xl md:mb-24 sm:font-bold sm:text-2xl sm:mb-20 sm:mt-14' data-aos="fade-left"><FormattedMessage id="welcomeText" defaultMessage="CELEBRATING FOOD AND SPECIAL DAYS!"/></h1> 
                
                    
                <ContactButtons/>
               
                
                <p className="text-xs text-center text-white lg:text-lg lg:mb-10 md:mb-4 md:text-sm sm:text-xs" data-aos="fade-left"><FormattedMessage id="knowMore" defaultMessage="Know more about us!"/></p>
                
                <div className="flex justify-center" data-aos="fade-left">
                <button className="w-auto h-12 mb-10 lg:mb-40 md:mb-20 sm:mb-10">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-130} duration={600}><img className="w-6 h-auto transition duration-500 lg:w-10 hover:scale-125 md:w-8 sm:w-6" src={down} alt="" /></Link>
                </button>
                </div>
            </div>
        </section>
    </>
  )
}
export default WelcomePage;