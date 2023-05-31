import React from 'react'

const Hero = ({car, className }) => {   
  return (
    <>
       {/* <div className={`hero ${className}`}>  */}
      <div className="cardetails--container">
          <div className="vital_info">
            <p className="divider--price"> {car.price} </p>
            <div className="divider--enginesize">
              <p> {car.engineSize} </p>
              <p> {car.hand} </p> 
              <p className="divider--year"> {car.year} </p>
            </div>
            <div class="vl">
              <p> {car.name} </p>   
              <p>Prestige Automatic 1.0 (100 cc)</p>
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
        <p><span><strong>Updated today</strong></span></p>
        {/* </div> */}
    </>
  )
}

export default Hero
