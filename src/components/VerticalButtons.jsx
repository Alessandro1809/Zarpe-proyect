import facebokLogo from '../assets/facebook.svg'
import instaLogo from '../assets/instagram.svg'
import tiktokLogo from '../assets/tiktok.svg'
import whatsappLogo from '../assets/whatsapp.svg'
import { Link } from 'react-router-dom'
//animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const VerticalButtons = () => {
  return (
    <>
         <div className="flex justify-center gap-10 mb-4">
            <div className='flex-col'data-aos="fade-right" >
            <Link to='https://www.facebook.com/ZarpeSnacks' target="_blank"><button className="flex items-center w-32 mb-2 transition duration-500 bg-gray-600 rounded-lg lg:h-16 lg:w-44 hover:scale-110 lg:mt-5 md:h-12 md:w-40 md:mb-4 sm:w-40 sm:mb-5" >
                  <img className='w-10 h-auto' src={facebokLogo} alt="" />
                  <p className='ml-2 text-white lg:text-xl'>Facebook</p>
              </button></Link>
              
              <Link to='https://www.instagram.com/zarpe_cr_/' target="_blank"><button className="flex items-center w-32 mb-2 transition duration-500 bg-gray-600 rounded-lg lg:h-16 lg:w-44 hover:scale-110 lg:mt-5 md:h-12 md:w-40 md:mb-4 sm:w-40 sm:mb-5" >
                  <img className='w-10 h-auto' src={instaLogo} alt="" />
                  <p className='ml-2 text-white lg:text-xl'>Instagram</p>
              </button></Link>
              
              <Link to='https://www.tiktok.com/@zarpe.snacks?_t=8hfLQ9ZIFss&_r=1' target="_blank"> <button className="flex items-center w-32 mb-2 transition duration-500 bg-gray-600 rounded-lg lg:h-16 lg:w-44 hover:scale-110 lg:mt-5 md:h-12 md:w-40 md:mb-4 sm:w-40 sm:mb-5" >
                  <img className='w-10 h-auto' src={tiktokLogo} alt="" />
                  <p className='ml-2 text-white lg:text-xl'>Tiktok</p>
              </button></Link>
    
              <Link to='https://wa.link/8z3084'> <button className="flex items-center w-32 mb-2 transition duration-500 bg-gray-600 rounded-lg lg:h-16 lg:w-44 hover:scale-110 lg:mt-5 md:h-12 md:w-40 sm:w-40 sm:mb-5" >
              <img className='w-10 h-auto' src={whatsappLogo} alt="" />
                  <p className='ml-2 text-white lg:text-xl'>Whatsapp</p>
              </button></Link>
              
            </div>
            
            

        </div>
    
    </>
  )
}
export default VerticalButtons;
