import React from 'react';

const LeftFilter = ({ handleSortSelect, sortOptions }) => {
  return (
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
  );
};

export default LeftFilter;
