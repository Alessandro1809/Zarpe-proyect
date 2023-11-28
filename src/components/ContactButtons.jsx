import facebokLogo from '../assets/facebook.svg'
import instaLogo from '../assets/instagram.svg'
import tiktokLogo from '../assets/tiktok.svg'
import whatsappLogo from '../assets/whatsapp.svg'
import { Link } from 'react-router-dom'
const ContactButtons = () => {
  return (
    <>
        <div className="flex justify-center gap-3 mb-20 lg:gap-10 md:gap-4 sm:gap-4">
            <Link to='https://www.facebook.com/ZarpeCateringService' target="_blank"> <button className="flex items-center transition duration-500 bg-gray-600 rounded-lg lg:h-12 lg:w-44 hover:scale-110 md:w-40 sm:w-32">
                    <img className='w-10 h-auto' src={facebokLogo} alt="" />
                    <p className='hidden p-2 text-white lg:text-xl md:text-xl sm:text-sm lg:block md:block sm:block'>Facebook</p>    
            </button></Link>
            
            <Link to='https://www.instagram.com/zarpe_cr_/' target="_blank"><button className="flex items-center transition duration-500 bg-gray-600 rounded-lg lg:h-12 lg:w-44 hover:scale-110 md:w-40 sm:w-32">
            <img className='w-10 h-auto' src={instaLogo} alt="" />
            <p className='hidden p-2 text-white lg:text-xl md:text-xl sm:text-sm lg:block md:block sm:block'>Instagram</p>
            </button></Link>
            
            <Link to='https://www.tiktok.com/@zarpe.snacks?_t=8hfLQ9ZIFss&_r=1' target="_blank"><button className="flex items-center transition duration-500 bg-gray-600 rounded-lg lg:h-12 lg:w-44 hover:scale-110 md:w-40 sm:w-32 ">     
            <img className='w-10 h-auto' src={tiktokLogo} alt="" />
            <p className='hidden p-2 text-white lg:text-xl md:text-xl sm:text-sm lg:block md:block sm:block'>Tiktok</p>
            </button></Link>

            <Link to='https://wa.link/8z3084' target="_blank"><button className="flex items-center transition duration-500 bg-gray-600 rounded-lg lg:h-12 lg:w-44 hover:scale-110 md:w-40 sm:w-32 ">
            <img className='w-10 h-auto' src={whatsappLogo} alt="" />
            <p className='hidden p-2 text-white lg:text-xl md:text-xl sm:text-sm lg:block md:block sm:block'>Whatsapp</p>
            </button></Link>
            

        </div>
    </>
  )
}

export default ContactButtons;