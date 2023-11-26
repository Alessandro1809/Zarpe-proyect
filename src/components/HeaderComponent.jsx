import { Link } from 'react-scroll';
import Logo from '../assets/Zarpe.jpg'
import { FormattedMessage } from 'react-intl';
const HeaderComponent = () => {
  return (
    <>
    <div className="relative flex items-center justify-center w-full h-auto bg-black">
      <div  className="flex items-center gap-3 pt-6 mb-4 text-white lg:text-3xl lg:gap-16 lg:p-2 md:text-xl md:gap-10 sm:gap-5 sm:p-2" data-aos="fade-left">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}><p className="transition duration-500 hover:scale-125 hover:text-green-300 hover:cursor-pointer"><FormattedMessage id='headerHome' defaultMessage="Home"/></p></Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-130} duration={600}><p className="transition duration-500 hover:scale-125 hover:text-blue-300 hover:cursor-pointer "><FormattedMessage id='headerAbout' defaultMessage="About"/></p></Link>
        <img className='hidden lg:h-auto lg:w-72 md:w-52 md:h-auto sm:h-auto sm:w-32 lg:block md:block sm:block' src={Logo} alt="Zarpe Logo" />
        <Link activeClass="active" to="services" spy={true} smooth={true} offset={-80} duration={800}><p className="transition duration-500 hover:scale-125 hover:text-yellow-300 hover:cursor-pointer"><FormattedMessage id='headerServices' defaultMessage="Services"/></p></Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={1100}><p className="transition duration-500 hover:scale-125 hover:text-red-300 hover:cursor-pointer"><FormattedMessage id='headerContact' defaultMessage="Contact"/></p></Link>
       
      </div>
            
            
     
    </div>
    </>
  )
}
export default HeaderComponent;