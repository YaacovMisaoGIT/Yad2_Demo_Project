import React from 'react';

const PriceFilter = ({ handlePriceRangeChange }) => {
  return (
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
  );
};

export default PriceFilter;
