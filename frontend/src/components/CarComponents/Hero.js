import React from 'react'

const Hero = ({car, className }) => {   
  return (
    <>
       {/* <div className={`hero ${className}`}>  */}
       <div className="car-details-wrapper"> 
      <div className="cardetails--container">   
          <div className="vital_info">  
            <p className="divider--price"> {car.price} </p>
            <div className="divider--enginesize">
              <p className='mediaquery'> {car.engineSize} </p>
              <p className='mediaquery'> {car.hand} </p> 
              <p className="mediaquery"> {car.year} </p>
            </div>
            <div class="vl">
              <p> {car.name} </p>   
              <p> {car.model}</p>
            </div> 
          </div>

          <div className="hero--container">
            <img src= {car.images}  alt="car here" />
            <img className="imgWhiteLogo" src={require("../images/yad2logoWhite.png")}  alt="whitelogo here" />
          </div>
        </div>

        <div className="lower_vital_info_tag">
          <p>cc</p>
          <p cla>Hands</p>
          <p>Year</p>
        </div>
        </div>
        <p className="updated_today"><span><strong>Updated today</strong></span></p>
        {/* </div> */}
    </>
  )
}

export default Hero
