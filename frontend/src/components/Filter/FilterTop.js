import './filter.css';

import React from 'react';

const FilterTop = ({
  car,
  onManufacturerSelect,
  onYearSelect,
  onPriceRangeChange,
  onAreaSelect
}) => {
  const handleManufacturerSelect = (manufacturer) => {
    onManufacturerSelect(manufacturer);
  };

  const handleYearSelect = (year) => {
    onYearSelect(year);
  };

  const handlePriceRangeChange = (e) => {
    const { min, max } = e.target.value;
    onPriceRangeChange({ min, max });
  };

  const handleAreaSelect = (area) => {
    onAreaSelect(area);
  };

  return (
    <>
      <div >
        <iframe className='iframe__top' src="https://creative.budget.co.il/budget_28-3-2023/?LinkID=Yad2&utm_source=YAD2&utm_medium=930_180_Banner&utm_campaign=salesevent" />
      </div>
      <div className="filter-top">
        <div className="filter-item">
          <label>Manufacturer:</label>
          <select onChange={(e) => handleManufacturerSelect(e.target.value)}>
            <option value="">Select Manufacturer</option>
            <option value="Tesla">Tesla</option>
            <option value="Mazda">Mazda</option>
            <option value="KIA">KIA</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Year:</label>
          <select onChange={(e) => handleYearSelect(e.target.value)}>
            <option value="">All Years</option>
            {Array.from({ length: 2023 - 2000 + 1 }, (_, i) => 2000 + i).map(
              (year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              )
            )}
          </select>
        </div>

        <div className="filter-item">
          <label>Price:</label>
          <input
            type="number"
            placeholder="Min"
            onChange={handlePriceRangeChange}
          />
          <input
            type="number"
            placeholder="Max"
            onChange={handlePriceRangeChange}
          />
        </div>

        <div className="filter-item">
          <label>Area:</label>
          <select onChange={(e) => handleAreaSelect(e.target.value)}>
            <option value="">All Areas</option>
            <option value="Haifa">Haifa</option>
            <option value="Maalot">Maalot</option>
            {/* Add more cities as options */}
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterTop;
