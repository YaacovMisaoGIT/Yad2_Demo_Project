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
          {activeItem === item.id && item.heading !== "Second Hand Magazine" && (
            <div className="navbar-list">
              {item.list1 && (
                <div className="navbar-column1">
                  {item.list1.map((subItem) => (
                    <a href="#" key={subItem.id} className="navbar-list-item">
                      <span className="navbar-column navbar-name">{subItem.name}</span>
                      {subItem.icon && (
                        <img className="navbar-icon" src={subItem.icon} alt={subItem.name} />
                      )}
                    </a>
                  ))}
                </div>
              )}
              {item.list2 && (
                <div className="navbar-column2">
                  {item.list2.map((subItem) => (
                    <a href="#" key={subItem.id} className="navbar-list-item">
                      <span className="navbar-column navbar-name">{subItem.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavbarYona;
