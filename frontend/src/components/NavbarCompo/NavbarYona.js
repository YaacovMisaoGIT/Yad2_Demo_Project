import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./NavData";
import "./CSSYona.css";

export default function Navbar() {
    //const {navItems} = props;
    const [showSubMenu, setShowSubMenu] = useState([])

    const subMenuOnMouseEnterHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
            let arr = [...prev]
            arr[subMenuId] = true
            return arr
        })
    }
    const subMenuOnMouseLeaveHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
            let arr = [...prev]
            arr[subMenuId] = false
            return arr
        })
    }
    return (
        <div className="navbar">
            <img id="logo" src="https://upload.wikimedia.org/wikipedia/he/thumb/4/42/Yad2_logo.svg/1200px-Yad2_logo.svg.png" alt="yad2 Logo"></img>

            <ul className="nav-items">
                {navItems.map((el)=> {
                if (!el.list1) {
                    return (
                        <li key={el.id}>
                        <a href='#' className="nav-link">
                        {el.heading}
                        </a>
                        </li>
                    )
                }
                return (
                    <li
                      onMouseEnter= {() => subMenuOnMouseEnterHandler (el.id)} 
                        onMouseLeave= {() => subMenuOnMouseLeaveHandler (el.id)}
                        key={el.id} className="nav-options">
                      
                        <div className="nav-link">
                            {el.heading}
                        </div>
                        <ul className="item-menu">
                            {showSubMenu[el.id] && el.list1.map(ele => {
                                    return (
                                        <div key={ele.id} className="sub-item">
                                            {ele.icon &&<img src={ele.icon} alt="logo" className="menu-icon"/>}
                                                <span className="sub-item-link">{ele.name}</span>
                                         </div>     
                                    )
                            })}
                            </ul>
                    </li>
                )
            })}
            </ul>
            <img className="icon userimg" id="userimg" src="images/user.png" alt = "Person icons"></img> 
         <img className="icon" src="images/heart.png" alt = "Person icons"></img> 
         <img className="icon" src="images/bell.png" alt = "Person icons"></img>
    
         <Link to="new-ad">
    <button className="btn">+ Publishing New ad</button>
    </Link>
        </div>
    )    
}