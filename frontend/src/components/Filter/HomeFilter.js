import React, { useEffect, useState } from 'react';
import FilterMain from './FilterMain';
import axios from 'axios';

function HomeFilter() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('/api/carData'); // Use axios to make the API request
        if (response.status === 200) {
          const json = response.data;
          setCars(json);
          saveDataToFile(json); // Call the function to save the data to a file
        } else {
          console.error('Failed to fetch car data');
        }
      } catch (error) {
        console.error('Error occurred while fetching car data:', error);
      }
    };

    fetchCars();
  }, []);

  // Function to save data to file
  const saveDataToFile = (data) => {
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'extractedData.js');
    document.body.appendChild(link);
    link.click();
  };
  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       const response = await fetch('/api/carData');
  //       if (response.ok) {
  //         const json = await response.json();
  //         setCars(json);
  //       } else {
  //         console.error('Failed to fetch car data');
  //       }
  //     } catch (error) {
  //       console.error('Error occurred while fetching car data:', error);
  //     }
  //   };

  //   fetchCars();
  // }, []);

  return (
    <div className="HomeFilter_home">
      <div className="HomeFilter_cars">
      {cars &&
  cars
    .filter((car) => {
      // Apply the filters here, e.g., manufacturer, year, price, area
      // Return true if the car should be included, false otherwise
      return true;
    })
    .map((car) => (
      <FilterMain
        key={car._id}
        car={car}
        onManufacturerSelect={handleManufacturerSelect}
        onYearSelect={handleYearSelect}
        onPriceRangeChange={handlePriceRangeChange}
        onAreaSelect={handleAreaSelect}
      />
    ))}

      </div>
    </div>
  );
}

export default HomeFilter;

export { saveDataToFile };
