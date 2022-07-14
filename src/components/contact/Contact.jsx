import React from 'react'
import "./contact.css"
import { images } from '../../constants/images'
const Contact = () => {
  return (
    <section className='contact' id="contact">
        <h3 className='contact-h3'>
            Contact us for the service you want to use
        </h3>
        <button className='header__info-btn'>
            Contact us
        </button>
        <img className='shape1' src={images.shape1} alt='' />
        <img className='shape2' src={images.shape4} alt='' />
    </section>
  )
}

export default Contact