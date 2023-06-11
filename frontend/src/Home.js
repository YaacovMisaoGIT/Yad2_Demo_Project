import React from 'react'
import { useEffect, useState } from 'react'
import CarDetails from './components/CarComponents/CarDetails'
import FilterMain from "./components/Filter/FilterMain"

function Home() {
  const [cars, setCars] = useState(null)
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedModel, setSelectedModel] = useState('');    
  const [selectedSort, setSelectedSort] = useState(null); 
  // const handleManufacturerSelect = (manufacturer) => {
  //   setSelectedManufacturer(manufacturer);
  // }; 

  const handleSearch = (manufacturer, model) => {
    setSelectedManufacturer(manufacturer);
    setSelectedModel(model);
  };

useEffect(() => {
const fetchCars = async () => {
  let url = '/api/carData';

  // filtering parameters to the URL
  if (selectedManufacturer !== '') {
    url += `?name=${selectedManufacturer}`;
    // url += `?manufacturer=${selectedManufacturer}`;
    if (selectedModel !== '') {
      url += `&model=${selectedModel}`;
    }
  }

  const response = await fetch(url);
  const json = await response.json();

  if (response.ok) {
    setCars(json);
  }
};

fetchCars();
}, [selectedManufacturer, selectedModel, selectedSort]);

  return (
    <div className="home">
        <div className="home__flex">
        {/* <iframe className='iframe__leftcorner' src="https://lp7.opl.co.il/Mini/?utm_source=yad2&utm_medium=TV_D&utm_campaign=opl"/> */}

        <FilterMain
          car={cars}
          // onManufacturerSelect={(manufacturer) => {
          //   handleManufacturerSelect(manufacturer);
          // }}
          onSearch={handleSearch} 

          onYearSelect={(name, value) => {
         
          }}

          onPriceRangeChange={({ min, max }) => {
             
          }}

          onAreaSelect={(area) => {
            
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
 
}

export default Home