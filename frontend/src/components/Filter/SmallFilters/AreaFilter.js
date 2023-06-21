import React from 'react';  

const AreaFilter = ({ Area, handleAreaSelect }) => {
  return (
    <div className="filter-item">
      <label>Area:</label>
      <select onChange={(e) => handleAreaSelect(e.target.value)}>
        <option value="">Select an area</option>
        {Area.map((item) => (
          <option key={item} value={item}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AreaFilter;


