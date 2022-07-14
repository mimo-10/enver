import React from 'react'
import "./footer.css";
import {images} from "../../constants/images";

const footer = () => {
  return (
    <footer className='footer container'>
        <div className='footer__logo'>
          <img src={images.logo} alt="" />
          <h1 className=''>
            enver
          </h1>
        </div>
        <ul>
          <li>
            <a href="#">
              Support
            </a>
          </li>
          <li>
            <a href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#">
              Terms and Conditions
            </a>
          </li>
        </ul>
        <p className='footer-p'>
          © 2022 Enver, All Rights Reserved
        </p>
    </footer>
  )
}

export default footer