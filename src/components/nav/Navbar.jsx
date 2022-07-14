import React, {useState} from 'react'
import "./navabar.css";
import {CgCloseR} from "react-icons/cg"
import {images} from "../../constants/images.js"
const Navbar = () => {
    const [overlay, setOverlay] = useState(false)
    const [menu, setMenu] = useState("#")
    function closeOverlay() {
        setOverlay(false)
    }
    function toggleOverlay() {
        setOverlay(true)
    }

    function menuClick(id, overl) {
        if (!overl) {
            setOverlay(false);
        }
        setMenu(id);
    }
    const li_color = {
        color: 'var(--color-main)'
    }
    const overlayDisplay = {
        display: overlay ? "flex" : "none",
        // animationPlayState: overlay ? "running" : "paused"
    }
    return (
        <nav className='container navbar'>
            <div className='navbar__logo'>
                <img src={images.logo} alt="" />
                <h1 className='navbar__logo-h1'>
                    enver
                </h1>
            </div>
            <ul className='navbar__items_list list lg'>
                <li>
                    <a style={menu === ("#home" || "#") ? li_color : {}} onClick={() => menuClick('#home')} href='#home'>
                        home
                    </a>
                </li>
                <li>
                    <a style={menu === ("#about") ? li_color : {}} onClick={() => menuClick('#about')} href='#about'>
                        about
                    </a>
                </li>
                <li>
                    <a style={menu === ("#services") ? li_color : {}} onClick={() => menuClick('#services')} href='#services'>
                        services
                    </a>
                </li>
                <li>
                    <a style={menu === ("#portfolio") ? li_color : {}} onClick={() => menuClick('#portfolio')} href='#portfolio'>
                        portfolio
                    </a>
                </li>
                <li>
                    <a style={menu === ("#contact") ? li_color : {}} onClick={() => menuClick('#contact')} href='#contact'>
                        contact
                    </a>
                </li>
            </ul>
            <button className='navbar__items-btn lg'>
                contact us
            </button>
            <div className='navbar__items-sm'>
                <div>
                    <img className='toggle' src={images.toggle} alt="" onClick={toggleOverlay} />
                </div>
                <div style={overlayDisplay} className='navbar__items_overlay-sm'>
                    <div className='overlay__close' onClick={closeOverlay}>
                        <CgCloseR fontSize="2rem" />
                    </div>
                    <ul className='navbar__items_list list'>
                        <li>
                            <a style={menu === ("#" || "#home") ? li_color : {}} onClick={() => menuClick('#home', false)} href='#home'>
                                home
                            </a>
                        </li>
                        <li>
                            <a style={menu === ("#about") ? li_color : {}} onClick={() => menuClick('#about', false)} href='#about'>
                                about
                            </a>
                        </li>
                        <li>
                            <a style={menu === ("#services") ? li_color : {}} onClick={() => menuClick('#services', false)} href='#services'>
                                services
                            </a>
                        </li>
                        <li>
                            <a style={menu === ("#portfolio") ? li_color : {}} onClick={() => menuClick('#portfolio', false)} href='#portfolio'>
                                portfolio
                            </a>
                        </li>
                        <li>
                            <a style={menu === ("#contact") ? li_color : {}} onClick={() => menuClick('#contact', false)} href='#contact'>
                                contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar