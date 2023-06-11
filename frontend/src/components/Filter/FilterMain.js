import './filter.css';
import '../CarComponents/cardetails.css'
import CarDetails from '../CarComponents/CarDetails';
import React, { useState } from 'react';
import { Area, Manufacturer, sortOptions } from './FilterData'; 
import SuperFilter from './SuperFilter';
import Hero from '../CarComponents/Hero.js'; 
import Hero2 from '../CarComponents/Hero2.js'; 
import Hero2B from '../CarComponents/Hero2B.js'; 

const FilterMain = ({
  car,
  onManufacturerSelect,
  onYearSelect,
  onPriceRangeChange,
  onAreaSelect,
  onSortSelect,
}) => {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false); 
  
  const handleManufacturerSelect = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
    onManufacturerSelect(manufacturer);
  };

  const getFilteredModels = () => {
    const selectedManufacturerData = Manufacturer.find(
      (item) => item.name === selectedManufacturer
    );
    if (selectedManufacturerData) {
      return selectedManufacturerData.models;
    } else {
      return [];
    }
  };

  const renderModelOptions = () => {
    const filteredModels = getFilteredModels();
    return filteredModels.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  };

  const handleYearSelect = (e) => {
    const { name, value } = e.target;
    onYearSelect(name, value);
  };

  const handlePriceRangeChange = (e) => {
    const { min, max } = e.target.value;
    onPriceRangeChange({ min, max });
  };

  const handleAreaSelect = (area) => {
    onAreaSelect(area);
  };

  const generateYearOptions = (startYear, endYear) => {
    const options = [];
    for (let year = startYear; year <= endYear; year++) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return options;
  };

  const currentYear = new Date().getFullYear();
  const years = generateYearOptions(2000, currentYear);

  const [selectedSort, setSelectedSort] = useState(null);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const handleSortSelect = (sort) => {
    setSelectedSort(sort);
    onSortSelect(sort);
    setIsSortDropdownOpen(false);
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen((prevState) => !prevState);
  };

  const [filteredCars, setFilteredCars] = useState([]);

  const handleSearch = () => {
    const filteredResults = []; // Replace this with your filter logic
    setFilteredCars(filteredResults);
    setIsSearchClicked(true); 
  };

  return (
    <>
      <div>
                <iframe
          className='iframe__top'
          src="https://creative.budget.co.il/budget_28-3-2023/?LinkID=Yad2&utm_source=YAD2&utm_medium=930_180_Banner&utm_campaign=salesevent"
        />
      </div>
      <div className="filter-top">
        <div className='hello'>
          <div className="filter-item">
            <label>Manufacturer</label>
            <select onChange={(e) => handleManufacturerSelect(e.target.value)}>
              <option value="">manufacturer</option>
              {Manufacturer.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-item">
          <label>Model</label>
          <select>
            <option value="">Model</option>
            {renderModelOptions()}
          </select>
        </div>

        <div className="filter-item">
          <label>Year Range:</label>
          <div>
            <select
              name="fromYear"
              onChange={handleYearSelect}
              defaultValue=""
            >
              <option value="">From</option>
              {years}
            </select>
            <select
              name="untilYear"
              onChange={handleYearSelect}
              defaultValue=""
            >
              <option value="">Until</option>
              {years}
            </select>
          </div>
        </div>

        <div className="filter-item">
          <label>Price </label>
          <div className="filter_price">
            <input
              type="number"
              placeholder="--From"
              onChange={handlePriceRangeChange}
            />
            <input
              type="number"
              placeholder="--Until"
              onChange={handlePriceRangeChange}
            />
          </div>
        </div>

        <div className="filter-item">
          <label>Area </label>
          <select onChange={(e) => handleAreaSelect(e.target.value)}>
            <option value="">Choose an area</option>
            {Area.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      <button onClick={handleSearch}>Search</button>
      </div>  
      
  {/* =========sort======== */}
      <div className="sort-item">
        <p>Sort by</p>
        <select onChange={(e) => handleSortSelect(e.target.value)}>
          <option value="">By date</option>
          {sortOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
{/* =========sort======== */}
   {/* Render filtered cars */}


{isSearchClicked && filteredCars.length > 0 && (
        <div>
          <h3>Filtered Cars:</h3>
          {filteredCars.map((car) => (
            // <Hero key={car.id} car={car} />
            // <Hero key={car.id} car={car} className="rendered-hero"/>
            // <CarDetails car={car} />
            
            <CarDetails car={car} key={car.id}>
              <Hero className="hero"/>
              <Hero2 />
              <Hero2B />
            </CarDetails>
          ))}
        </div>
      )}

    </>
  );
};

export default FilterMain;
