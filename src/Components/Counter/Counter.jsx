import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const stats = [
  { number: 50, suffix: '+', label: 'Happy Clients' },
  { number: 20, suffix: '+', label: 'Jobs Delivered' },
  { number: 2, suffix: '+', label: 'Years of Experience' },
]

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3,     // fire when 30% of component is visible
  })

  return (
    <div ref={ref} className='bg-customBlue text-white py-10 px-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300'
          >
            <p className='text-4xl font-bold mb-2 text-white'>
              {inView ? (
                <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
              ) : (
                '0'
              )}
            </p>
            <p className='text-lg'>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Counter
