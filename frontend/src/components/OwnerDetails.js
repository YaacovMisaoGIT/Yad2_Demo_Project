// import { Link } from 'react-router-dom';


const OwnerDetails = ({ car } ) => {  // props
    // const car = props.car
    // {console.log(car)};
      return (
        <div className="owner_details">
          
           <p><strong>Owner of the Car: </strong>
               {car.owner.userName}
            </p>
   
           <hr/>
         </div> 
      )
  }
  
  
  export default OwnerDetails
   