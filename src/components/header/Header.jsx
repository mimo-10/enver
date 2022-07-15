import React from 'react'
import {images} from "../../constants/images";
import "./header.css";
import {BsArrowBarRight} from "react-icons/bs";

const Header = () => {
  return (
    <header className='header container' id='home'>
        <aside className='header__info'>
            <h1 className='header__info-h1'>
              Build Your Awesome Platform
            </h1>
            <p className='header__info-p'>
              Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
            </p>
            <button className='header__info-btn'>
              <a href="#services">
                our services
              </a>
              <BsArrowBarRight />
            </button>
        </aside>
        <aside className='header__img'>
            <img src={images.img} alt="" />
        </aside>
    </header>
  )
}

export default Header