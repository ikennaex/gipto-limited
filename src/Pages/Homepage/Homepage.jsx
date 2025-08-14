import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Promise from '../../Components/Promise/Promise'
import Appointment from '../../Components/Appointment/Appointment'
import Counter from '../../Components/Counter/Counter'

const Homepage = () => {
  return (
    <div>
        <Herosection />
        <Counter />
        <About />
        <Services />
        <Testimonials />
        <Appointment />
    </div>
  )
}

export default Homepage