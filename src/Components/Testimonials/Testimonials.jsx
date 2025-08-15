import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote:
      '“Gipto Limited did a fantastic job cleaning our office space. Everything was spotless, and the team was punctual and professional throughout.”',
    author: '— Sarah M., Newbury'
  },
  {
    quote:
      '“Their residential care cleaning service is outstanding. They treated my elderly mother’s home with so much care and attention to detail.”',
    author: '— James L., Reading'
  },
  {
    quote:
      '“I was impressed with how fresh and perfectly cleaned my clothes looked after their dry-cleaning service. Highly recommended!”',
    author: '— Emma R., Basingstoke'
  },
  {
    quote:
      '“From booking to final inspection, Gipto Limited made the entire cleaning process stress-free. Our building has never looked better.”',
    author: '— David H., Thatcham'
  }
];



const Testimonials = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 10000) // 10 seconds

    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } }
  }

  return (
    <div className='bg-white px-7 py-14'>
      <div className='container mx-auto max-w-3xl text-center'>
        <h2 className='text-3xl font-bold text-black mb-10'>What Our Clients Say</h2>

        <div className='relative h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              variants={slideVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='absolute inset-0 flex flex-col justify-center items-center text-black px-6'
            >
              <p className='text-lg sm:text-xl mb-4 italic leading-relaxed'>
                {testimonials[index].quote}
              </p>
              <p className='text-customYellow font-semibold'>{testimonials[index].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Testimonials