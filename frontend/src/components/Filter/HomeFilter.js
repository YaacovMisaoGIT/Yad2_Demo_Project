import React, { useEffect, useState } from 'react';
import FilterTop from './FilterTop';

function HomeFilter() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/carData');
        if (response.ok) {
          const json = await response.json();
          setCars(json);
        } else {
          console.error('Failed to fetch car data');
        }
      } catch (error) {
        console.error('Error occurred while fetching car data:', error);
      }
    };

    fetchCars();
  }, []);

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
      <FilterTop
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
