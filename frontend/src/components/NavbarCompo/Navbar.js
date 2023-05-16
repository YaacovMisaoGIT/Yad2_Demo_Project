import React, { useState } from "react"
import { Link } from 'react-router-dom';
import Dropdown from '../DropdownCompo/Dropdown';
import './Navbar.css'


export default function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
      
     
    return (
        <>
            <nav className='navbar'>
                <Link to='/'><img src={"yad2logo.png"} className="navbar-logo" alt="This is a logo" 
                   onClick={closeMobileMenu}
                /></Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item"
                         onClick={onMouseEnter}
                        //  onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}
                    >
                        <Link className="nav-links" to='/secondhandmagazine'
                            onClick={closeMobileMenu}
                        >
                            Second Hand Magazine <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/Professionals'
                            onClick={closeMobileMenu}
                        >
                            Professionals  
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/Pets'
                            onClick={closeMobileMenu}
                        >
                            Pets 
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/businessforsale'
                            onClick={closeMobileMenu}
                        >
                            Business For Sale 
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/ILneeded'
                            onClick={closeMobileMenu}
                        >
                            IL needed  
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/secondhand'
                            onClick={closeMobileMenu}
                        >
                            Second Hand 
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" to='/vehicle'
                            onClick={closeMobileMenu}>
                            Vehicle 
                        </Link>
                        {/* {dropdown && <Dropdown />} */}

                    </li>
                    <li className="nav-item"
                       onClick={onMouseEnter}
                    //    onMouseEnter={onMouseEnter}
                       onMouseLeave={onMouseLeave}
                    >
                        <Link className="nav-links" to='/realestate'
                            onClick={closeMobileMenu}
                        >
                            Real Estate<i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                </ul>
            </nav>

            {/* <header> 
            <a href='#'>All Vehicles</a> <hr/>
            <a href='#'>Commercial</a>  <hr/>
            <a href='#'>Jeep</a> <hr/>
            <a href='#'>Motorcycles</a> <hr/>
            <a href='#'>Motorcycles</a> <hr/>

        </header> */}

        </>

    )
}