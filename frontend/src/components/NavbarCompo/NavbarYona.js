import React, { useState } from 'react';
import { navItems } from './NavData.js';
import './CSSYona.css';

function NavbarYona() {
  const [activeItem, setActiveItem] = useState(null);

  const handleHover = (itemId) => {
    setActiveItem(itemId);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <div className="navbar-container">
      {navItems.map((item, index) => (
        <div
          key={item.id}
          className="navbar-item"
          onMouseEnter={() => handleHover(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="navbar-heading">{item.heading}</div>
          {activeItem === item.id && (
            <div className="navbar-list">
              <div className="navbar-column1">
                {item.list1.map((item) => (
                  <div key={item.id} className="navbar-list-item">
                    <span className="navbar-column navbar-name">{item.name}</span>
                    {item.icon && (
                      <img className="navbar-icon" src={item.icon} alt={item.name} />
                    )}
                  </div>
                ))}
              </div>
              <div className="navbar-column2">
                {item.list2.map((item) => (
                  <div key={item.id} className="navbar-list-item">
                    <span className="navbar-column navbar-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavbarYona;
