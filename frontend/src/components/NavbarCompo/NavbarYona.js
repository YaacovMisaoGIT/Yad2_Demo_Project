import React, { useState } from 'react';
import { navItems } from './Data.js';
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
      {navItems.map((item) => (
        <div
          key={item.id}
          className="navbar-item"
          onMouseEnter={() => handleHover(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="navbar-heading">{item.name}</div>
          {activeItem === item.id && (
            <div className="navbar-list">
              {item.children &&
                item.children.map((child) => (
                  <div key={child.id} className="navbar-list-item">
                    <span className="navbar-column navbar-name">{child.name }</span>
                    <span className="navbar-column navbar-name2">{child.name2}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavbarYona;




// import React, { useState } from 'react';
// import { navItems }from './Data.js';
// import './CSSYona.css'

// function NavbarYona() {
//   const [activeItem, setActiveItem] = useState(null);

//   const handleHover = (itemId) => {
//     setActiveItem(itemId);
//   };

//   const handleMouseLeave = () => {
//     setActiveItem(null);
//   };

//   return (
//     <div className="navbar-container">
//       {navItems.map((item) => (
//         <div
//           key={item.id}
//           className="navbar-item"
//           onMouseEnter={() => handleHover(item.id)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="navbar-heading">{item.name}</div>
//           {activeItem === item.id && (
//             <div className="navbar-list">
//               {item.children &&
//                 item.children.map((child) => (
//                   <div key={child.id} className="navbar-list-item">
//                     <img src={child.icon} alt={child.name} className="navbar-icon" />
//                     <span>{child.name || child.name2}</span>
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default NavbarYona;
