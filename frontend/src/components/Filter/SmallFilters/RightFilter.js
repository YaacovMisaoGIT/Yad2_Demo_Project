import React, { useState } from 'react';
import './smallfilter.css';
import * as Icons from 'react-icons/fa'   
 

const RightFilter = ({ handleSortSelect, sortOptions }) => {
 
  return (
    <div className="filter_container"> 
      <div className="filter">
        <p>Filter search<Icons.FaFunnelDollar /></p>
      </div>
      <div className="sort-item">    
        <p>Sort by</p>
        <select onChange={(e) => handleSortSelect(e.target.value)}>
          <option value=""></option>
          {sortOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label} &#9711;
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RightFilter;
