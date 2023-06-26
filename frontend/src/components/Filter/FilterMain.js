import './filter.css';
// import '../CarComponents/cardetails.css';
import CarDetails from '../CarComponents/CarDetails';
import React, { useState } from 'react';
import { Area, Manufacturer, sortOptions } from './FilterData';
import SuperFilter from './SuperFilter';
import Hero from '../CarComponents/Hero.js';
import Hero2 from '../CarComponents/Hero2.js';
import Hero2B from '../CarComponents/Hero2B.js';
import YearFilter from './SmallFilters/YearFilter';
import PriceFilter from './SmallFilters/PriceFilter';
import AreaFilter from './SmallFilters/AreaFilter'; // Import the AreaFilter component
import RightFilter from './SmallFilters/RightFilter';


const FilterMain = ({
  car,
  onManufacturerSelect,
  onYearSelect,
  onPriceRangeChange,
  onAreaSelect,
  onSortSelect,
  onSearch
}) => {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(true);

  const handleManufacturerSelect = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
    setSelectedModel(''); // Reset the selected model when a new manufacturer is selected
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
    onSearch(selectedManufacturer, selectedModel);
  };

  return (
    <>
      <div>
        <iframe
          className="iframe__top"
          src="https://creative.budget.co.il/budget_28-3-2023/?LinkID=Yad2&utm_source=YAD2&utm_medium=930_180_Banner&utm_campaign=salesevent"
        />
      </div>
      <div className="filter-top">
        <div className="hello">
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
          <select
            disabled={!selectedManufacturer} // Disable the Model dropdown if no Manufacturer is selected
            onChange={(e) => setSelectedModel(e.target.value)}
            value={selectedModel}
          >
            <option value="">Model</option>
            {renderModelOptions()}
          </select>
        </div>

        <YearFilter onYearSelect={onYearSelect} />

        <PriceFilter onPriceRangeChange={onPriceRangeChange} />

        <AreaFilter Area={Area} onAreaSelect={onAreaSelect} />

        <button onClick={handleSearch}>Search</button>
      </div>

      <RightFilter handleSortSelect={handleSortSelect} sortOptions={sortOptions} />

      {isSearchClicked && filteredCars.length > 0 && (
        <div>
          <h3>Filtered Cars:</h3>
          {filteredCars.map((car) => (
            <CarDetails car={car} key={car.id}>
              <Hero className="hero" />
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
