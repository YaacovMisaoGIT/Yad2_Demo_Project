import React, { useState } from 'react';
import { Manufacturer } from './FilterData';


const SuperFilter = ({ onSearch }) => {
    const [selectedManufacturer, setSelectedManufacturer] = useState('');
  
    const handleManufacturerSelect = (manufacturer) => {
      setSelectedManufacturer(manufacturer);
    };
  
    const handleSearch = () => {
      if (selectedManufacturer === 'Mazda') {
        onSearch(selectedManufacturer);
      }
    };
  
    return (
      <div className="super-filter">
        <div className="filter-item">
          <label>Manufacturer</label>
          <select onChange={(e) => handleManufacturerSelect(e.target.value)}>
            <option value="">Manufacturer</option>
            {Manufacturer.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default SuperFilter;
  