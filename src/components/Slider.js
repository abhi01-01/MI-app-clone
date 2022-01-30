import  Carousel  from 'react-bootstrap/Carousel';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Slider = ({start}) => {
  return (
       <Carousel fade>
       
    {start.map((item,index)=>(
      <Carousel.Item key={index} id="slider" interval={1000} keyboard={"true"} >
      <img 
      className='d-block w-100'
      id='sliderImage'
      src={item}
      alt={`${index} First slide`}
      />
      </Carousel.Item>
     ))}
  </Carousel>
  )
};

export default Slider;
