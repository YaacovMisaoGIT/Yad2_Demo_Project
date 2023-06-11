import React from 'react'
import { useEffect, useState } from 'react'

import CarDetails from './components/CarComponents/CarDetails'
import Hero2 from './components/CarComponents/Hero2'
import FilterMain from "./components/Filter/FilterMain"

function Home() {
  const [cars, setCars] = useState(null)
  const [users, setUsers] = useState(null)
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedSort, setSelectedSort] = useState(null);

useEffect(() => {
const fetchCars = async () => {
  let url = '/api/carData';

  // Add filtering parameters to the URL
  if (selectedManufacturer !== '') {
    url += `?name=${selectedManufacturer}`;
  }

  const response = await fetch(url);
  const json = await response.json();

  if (response.ok) {
    setCars(json);
  }
};

fetchCars();
}, [selectedManufacturer, selectedSort]);






  return (
    <div className="home">
        <div className="home__flex">
        {/* <iframe className='iframe__leftcorner' src="https://lp7.opl.co.il/Mini/?utm_source=yad2&utm_medium=TV_D&utm_campaign=opl"/> */}
        {/* <FilterTop/> */}

        <FilterMain
          car={cars}
          onManufacturerSelect={(manufacturer) => {
            setSelectedManufacturer(manufacturer);
          }}
          onYearSelect={(name, value) => {
            // Handle year select logic
          }}
          onPriceRangeChange={({ min, max }) => {
            // Handle price range change logic
          }}
          onAreaSelect={(area) => {
            // Handle area select logic
          }}
          onSortSelect={(sort) => {
            setSelectedSort(sort);
          }}
        />

        <div className='cars'>
          {cars && cars.map((car) => (
            <CarDetails key= {car._id} car = {car} />
          ))}  
        </div>
       
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