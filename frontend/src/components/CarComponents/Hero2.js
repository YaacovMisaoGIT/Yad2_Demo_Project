import { useState } from 'react';
import "./cardetails.css"
import TickIcon from '../BooleanValues/TickIcon'; 
import CrossIcon from '../BooleanValues/CrossIcon'; 
import * as Icons from 'react-icons/fa' 
// import {SiPhone} from 'react-icons/si'

const Hero2 = ({car, user}) => {  
    
  const [displayUsername, setDisplayUsername] = useState(false);
    
    const UserHandleClick = (e) => {
        e.stopPropagation();
        console.log('user')
        setDisplayUsername(!displayUsername);
      
      };
  return (
    <>
      <div className="cardetails--container2">
            <div className="vital_info2">
              <p className="divider--price2"> {car.price} </p>
              
              <div className="vl2">
                <p> {car.name} </p>      
                <p>Prestige Automatic 1.0 (100 cc)</p>
              </div> 
              <div className="divider--enginesize2">
                <p> {car.engineSize} </p>
                <p> {car.hand} </p>
                <p className="divider--year2"> {car.year} </p>
              </div>
            </div>

            <div className="hero--container2">
              <img src= {car.images} alt="car here" />
              <img className="imgWhiteLogo2" src={require("../images/yad2logoWhite.png")}  alt="whitelogo here" />
            </div>
          </div>

          <div className="lower_vital_info_tag2">
            <p>cc</p>
            <p cla>Hands</p>
            <p>Year</p>
          </div>
          <p><span><strong>Updated today</strong></span></p>
          
          <div className="display" onClick={UserHandleClick}>
           <h2><Icons.FaPhone /> Display a phone number</h2>
           {/* <h2><SiPhone />? Display a phone number</h2> */}
            <div className={`usernameClass ${displayUsername ? 'show' : ''}`}>
              {/* <p className={`username ${displayUsername ? 'show' : ''}`}>{car.owner.userName}</p> */}
              <p className={`username ${displayUsername ? 'show' : ''}`}>{car.user.userName}</p>
              <p className={`username ${displayUsername ? 'show' : ''}`}>{car.user.userNumber}</p>
              <p className={`username ${displayUsername ? 'show' : ''}`} href="#">Sent an email to the advertiser</p>
              <p className={`username ${displayUsername ? 'show' : ''}`} href="#">Check Finance for Car {">"} </p>
            </div>
          </div>
    </>
  )
}

export default Hero2
