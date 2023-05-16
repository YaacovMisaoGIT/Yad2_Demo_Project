import { useEffect, useState } from "react";

//components
import CarDetails from "../components/CarDetails"

function Home ( ) {  //{car } deleted
    const[cars, setCars] = useState() 
    // const [owner, setOwner] = useState(null);
    // const [ownerId, setOwnerId] = useState(car.owner);
    console.log(cars);
   const CarDetailsElement=cars && cars.map((car) => ( <CarDetails key={car._id} car={car}/>))
  console.log(CarDetailsElement);
    useEffect(() => {
        // const fetchCars = async () => {
        //     const response =  await fetch('/api/cars')
        //     const json = await response.json()
        //     console.log(json);
        //     if (response.ok) {
        //         setCars(json)
        //         // setOwnerId( json)
        //     }
        // }
        // fetchCars() 

        fetch('/api/cars').then(res=>res.json()).then(data=>{
            console.log(data);
            setCars(data)
         
        })
    },[])

 
    return (
        <div className="home">
            <div className="cars">
                
                {CarDetailsElement}
             {/* {cars.length > 0 && cars.map((car) => (
               <CarDetails key={car._id} car={car}/>
               
            // <p key={car._id}>{car.description}</p>
             ) )} */}
            </div>
        </div>
    )
}

export default Home