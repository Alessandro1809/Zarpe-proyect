import Logo from '../assets/Zarpe.jpg'
import { Link } from 'react-router-dom';
//animation library
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from 'react-intl';

AOS.init();

const FooterComponent = () => {
  return (
   <>
   <footer className="w-full h-auto bg-black">
      <div className="flex items-center justify-center mb-4 lg:gap-40 md:gap-40 sm:gap-40" >
        <img className='w-20 h-auto lg:h-auto lg:w-40 md:h-auto md:w-32 sm:w-32' src={Logo} alt="Zarpe Logo" data-aos="fade-right" />
      </div>
      <div className='flex justify-between gap-16 pb-4 pl-2 pr-2 lg:pr-10 lg:pl-10 lg:pb-4 md:pr-10 md:pl-10 md:pb-5 sm:pl-5 sm:pr-5 sm:pb-4'>
        <p className='text-xs text-white lg:text-sm md:text-sm sm:text-sm'>© 2023 Zarpe Snacks</p>
        <Link to='https://www.linkedin.com/in/alessandrodg/' target='__blank'><p className='text-xs text-white lg:text-sm md:text-sm sm:text-sm'><FormattedMessage id='madeFor' defaultMessage="This web was made by Alessandro Diaz"/></p></Link>
      </div>
   </footer>
   </>
  )
}
export default FooterComponent;