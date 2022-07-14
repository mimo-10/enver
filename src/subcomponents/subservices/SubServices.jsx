import React from 'react'
import "./subservices.css";

const SubServices = (props) => {
  return (
    <div className='sub-service'>
        <div style={{
          backgroundColor: `${props.bgColor}`
        }} className='sub-service__icon'>
          {props.icon}
        </div>
        <h4 className='sub-service__title'>
          {props.title}
        </h4>
        <p className='sub-service__content'>
          {props.content}
        </p>
    </div>
  )
}

export default SubServices