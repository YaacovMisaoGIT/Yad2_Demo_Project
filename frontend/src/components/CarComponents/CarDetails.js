import { useState } from 'react';
import "./cardetails.css"
import TickIcon from '../BooleanValues/TickIcon'; 
import CrossIcon from '../BooleanValues/CrossIcon'; 
import * as Icons from 'react-icons/fa' 
import Hero from './Hero.js'; 
import Hero2 from './Hero2.js'; 
import Hero2B from './Hero2B.js'; 

const CarDetails = ({ car } ) => {
  const {price} = car;

  const [showHero2, setShowHero2] = useState(false);
  const [showHero, setShowHero] = useState(true); // new state variable to track visibility of hero div

  const handleClick = () => {
    console.log("close")
    setShowHero2(!showHero2); // toggle visibility of hero2 section
    setShowHero(!showHero); // toggle visibility of hero div
  };

 

  return (
    <div>
      <section className="hero" style={{ display: showHero ? 'block' : 'none' }} onClick={handleClick}>
        <Hero car={car}/>
      </section>
  
      {showHero2 && (
        <>
        <section className="hero2" onClick={handleClick}>
          <Hero2 key={car._id} car={car}/>
        </section>
        <Hero2B car={car}/>
        
        </>
        
      )}
    </div>
  );
};

export default CarDetails;

 
 

// import { useState } from 'react';
// import "./cardetails.css"


// const CarDetails = ({ car } ) => {  // props
//   const {price,}=car

//   const [showHero2, setShowHero2] = useState(false);
//   const handleClick = () => {
//     setShowHero2(true);
//   };

//     return (
//       <div>
//       <section className="hero" onClick={handleClick}>
//       <div className="cardetails--container">
//       <div className="vital_info">
//           <p className="divider--price"> {price} </p>
//           <div className="divider--enginesize">
//           <p> {car.engineSize} </p>
//           <p> {car.hand} </p>
//           <p className="divider--year"> {car.year} </p>
//           </div>
//           <div class="vl">
//           <p> {car.name} </p>   
//           <p>Prestige Automatic 1.0 (100 cc)</p>
//           </div> 
//       </div>
    
//       <div className="hero--container">
//       <img src= {car.images} className="hero_photo" alt="car here" />
//       <img className="imgWhiteLogo" src={require("../images/yad2logoWhite.png")}  alt="whitelogo here" />
//       </div>
//       </div>
//          <div className="lower_vital_info_tag">
//                 <p>cc</p>
//                 <p cla>Hands</p>
//                 <p>Year</p>
//             </div>
//         <p><span><strong>Updated today</strong></span></p>
//   </section>
  
//   {showHero2 && (
//       <section className="hero2">
//       <div className="cardetails--container2">
//       <div className="vital_info2">
//           <p className="divider--price2"> {price} </p>
//           <div className="divider--enginesize2">
//           <p> {car.engineSize} </p>
//           <p> {car.hand} </p>
//           <p className="divider--year2"> {car.year} </p>
//           </div>
//           <div class="vl2">
//           <p> {car.name} </p>      
//           <p>Prestige Automatic 1.0 (100 cc)</p>
//           </div> 
//       </div>
    

//       <div className="hero--container2">
//       <img src= {car.images} className="hero_photo2" alt="car here" />
//       <img className="imgWhiteLogo2" src={require("../images/yad2logoWhite.png")}  alt="whitelogo here" />
//       </div>
//       </div>
  
//          <div className="lower_vital_info_tag2">
//                 <p>cc</p>
//                 <p cla>Hands</p>
//                 <p>Year</p>
//             </div>
//         <p><span><strong>Updated today</strong></span></p>
//   </section>
//   )}
  
//   </div>
//     )
// }

// export default CarDetails
 
 