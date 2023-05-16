import { useEffect, useState } from "react";

//components
import CarDetails from "../components/CarDetails"

function Home () {
    const[car, setCar] = useState(null)  

    useEffect(() => {
        const fetchCars = async () => {
            const response =  await fetch('/api/car/${')
            const json = await response.json()

            if (response.ok) {
                setCar(json)
            }
        }
        fetchCars() 
    }, [])

    return (
        <div className="home">
            <div className="cars">
             {car && car.map((car) => (
               <CarDetails key={car._id} car={car}/>
               
            // <p key={car._id}>{car.description}
            //                 {car.owner.userContact}
            // </p>
             ) )}
            </div>
        </div>
    )
}

export default Home