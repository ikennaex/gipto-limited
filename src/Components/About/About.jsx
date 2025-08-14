import React from 'react'
import { img12, img7 } from '../../imports'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';
import FadeIn from '../fadein';

const About = () => {
  return (
    <FadeIn duration = {100} >
    <div className='container mx-auto px-7 lg:px-20 py-14 lg:py-20'>
    <div className='lg:flex'>
        <div className='lg:w-1/2'>
            <img 
                className='w-full object-cover pr-2 lg:h-full slide-in-blurred-bottom rounded-t-3xl' 
                src={img12} 
                alt="real estate" 
            />
        </div>
        
        <div className='lg:w-1/2 lg:pl-10'>
            <h2 className='font-bold text-3xl mt-7 lg:text-6xl'>Who are we?</h2>
            <p className='lg:text-xl mt-4'>
                Gipto Limited is a trusted cleaning and care service provider based in Newbury, United Kingdom. We specialise in the general cleaning of buildings, providing fresh and hygienic environments for homes and businesses. Our dedicated team also delivers compassionate residential care for the elderly and disabled, ensuring comfort, dignity, and quality of life. In addition, we offer expert washing and dry-cleaning services for textiles and fur products, combining care, precision, and efficiency in every service we provide.

            </p>
        </div>
    </div>

    <div className='pt-7'>
      <Link to= {"/about"}>
        <button className='flex items-center justify-evenly gap-4 bg-customBlue px-5 py-3 rounded-xl font-bold text-white'>Read More
        <FaArrowRight />
           </button>

           </Link>
    </div>
</div>
</FadeIn>
  )
}

export default About