import React from 'react'
import "./services.css";
import SubServices from "../../subcomponents/subservices/SubServices";
import data from "../../constants/data"
import { images } from '../../constants/images';
const Services = () => {
  const services = data.services.map((service, index)=> {
    return (
      <SubServices key={index} icon={service[0]} title={service[1]} content={service[2]} bgColor={service[3]} />
    )
  })
  return (
    <section id="services" className='services container'>
      <img className='shape3' src={images.shape2} alt="" />
      <img className='shape4' src={images.shape3} alt="" />
      <h1 className='services-h1'>
        The Services We Provide For You
      </h1>
      <div className='services__grid'>
        {services}
      </div>
    </section>
  )
}

export default Services