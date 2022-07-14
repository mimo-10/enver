import React, {useState, useRef} from 'react'
import "./about.css"
import {images} from "../../constants/images"
import {BsFillPauseCircleFill} from "react-icons/bs";
import {FaPlayCircle} from "react-icons/fa";

const About = () => {
  const [vidState, setVidState] = useState(false);
  const vidRef = useRef()
  function reverse() {
    setVidState(prevState=> !prevState);
  }
  function pause() {
    reverse();
    vidRef.current.pause()
  }
  function play(){
    reverse();
    vidRef.current.play()
  }
  return (
    <section className='container about' id="about">
        <div className='about__info'>
          <h2 className='about__info-h2'>
            Why Enver Is The Best Choice?
          </h2>
          <p className='about__info-p'>
            Watch this one minute video so you understand why you should use our services!
          </p>
        </div> 
        <div className='about__vid'>
            <video ref={vidRef} src={images.vid} controls={false} loop={true} />
            <div className='about__vid-controls' >
                {!vidState ? 
                  <FaPlayCircle className="controls" fontSize="4rem" onClick={play} />
                :
                  <BsFillPauseCircleFill className="controls" fontSize="4rem" onClick={pause} />}
            </div>
        </div>
    </section>
  )
}

export default About