import React from 'react'
import { useEffect, useState } from 'react'

import CarDetails from './components/CarComponents/CarDetails'
import Hero2 from './components/CarComponents/Hero2'
import FilterTop from "./components/Filter/FilterTop"

function Home() {
    const [cars, setCars] = useState(null)
    const [users, setUsers] = useState(null)

    useEffect(() => {
    const fetchCars = async () => {
        const response = await fetch('/api/carData')
        const json = await response.json()
      console.log(json)
        if (response.ok) {
            setCars(json)

        }
    }
  
    fetchCars()
}, [])


// useEffect(() => {
//   const fetchUsers = async () => {
//       const response = await fetch('/api/users')    
//       const json = await response.json()
//     console.log(json)
//       if (response.ok) {
//         setUsers(json)

//       }
//   }
//   fetchUsers()
// }, [])

  return (
    <div className='home'>
      {/* <div >
        <iframe className='iframe__top' src="https://creative.budget.co.il/budget_28-3-2023/?LinkID=Yad2&utm_source=YAD2&utm_medium=930_180_Banner&utm_campaign=salesevent"/>
      </div> */}
        <div className="home__flex">
        <iframe className='iframe__leftcorner' src="https://lp7.opl.co.il/Mini/?utm_source=yad2&utm_medium=TV_D&utm_campaign=opl"/>
        {/* <FilterTop/> */}
        <div className='cars'>
          {cars && cars.map((car) => (
            <CarDetails key= {car._id} car = {car} />
          ))}  
        </div>
        {/* <div className='users'>
           {users && users?.map((user) => (
            <Hero2 key= {user?._id} user = {user} />
          ))}  
        </div> */}
        </div>
    </div>
  ) 
  return (
    <div className='home'>
        <div className='users'>
           {users && users?.map((user) => (
            <Hero2 key= {user?._id} user = {user} />
          ))}  
        </div>
    </div>
  )
}

export default Home