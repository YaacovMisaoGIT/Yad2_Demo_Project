import React from "react";
import { Link } from "react-router-dom";
import { headerItems } from "./HeaderItems";
import "./Header.css";

export default function Header() {
    return(
        <div className="header">
            <ul className="header-items">
          {headerItems.map((item) => {
             return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
          })}
          </ul>
          <div className="tag-item">
          <Link to="vihicle-price-list" className="link">
      <img className="tag" src="images/car.png" alt="car-tag"/>
      <span>Vehicle Price List</span>
    </Link> 
    <Link to="convention" className="link">
      <img className="tag price-tag" src="images/price-tag.png" alt="price-tag"/>
      <span>Convention</span>
    </Link> 
    </div>
        </div>
        
    )
}