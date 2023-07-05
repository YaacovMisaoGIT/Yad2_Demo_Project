import React from "react";
import { FooterData, realEstate, vehicle, secondHand, needed, moreOnTheSite, logoData, bottomPara, botttomColumn } from "./FooterData";
import "./footer.css";

const Footer = () => {
  return (
    <>
    <footer className="footer_wrapper">
      <div className='footer--para'>
      {FooterData.map((item) =>(
            <p>{item.welcomeMsg}</p>
      ))}
      </div>
      <div className="footer--container"> 
        <div className="footer-menu">
         <h3>Real Estate</h3>
           <ul>
             {realEstate.map((item) => (
                <li key={item.name}>
                   <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
        </div>
        <div className="footer-menu">
          <h3>Vehicle</h3>
          <ul>
          {vehicle.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
              ))}
           </ul>
         </div>
       <div className="footer-menu">
        <h3>Second Hand</h3>
        <ul>
          {secondHand.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="footer-menu">
        <h3> Needed </h3>
        <ul>
          {needed.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="footer-menu">
        <h3>More On The Site</h3>
        <ul>
          {moreOnTheSite.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      </div>

      <div className='footer--icons'>
      {/* <a href="#"><img src="./images/apple.png"className="footer--logo"  /> </a> */}
        {logoData.map((item) => (
         <a href="#"><img src={ item.src} className="footer--logo"  /> </a>
        ))}
      </div>

      <div className='footer--p'> 
              {bottomPara.map((item) => (
                <p>{item.title}</p>
              ))}
      <div/>
            <hr/>
      <div className='col--last'>
        {botttomColumn.map((item) => (
          <a href="#"><h4> {item.title} </h4></a>
        ))} 
      </div>
      
      <div className='version'>
        <h3>Version: pro</h3>
       </div>
      
    </div>
  </footer>
  </>
  
  );
}

export default Footer;




// import React from 'react'
// import { FooterData } from './FooterData'
// import '../footer.css'


//  export default function Footer() {
//     return (
//         <>
//         <section className='main-footer'>
//          {FooterData.map((item, index) =>(
//          <>
//           <p className='footer--para'>
//             {item.welcomeMsg}
//           </p>
//           <div className='row'>
//                  <h4> {item.title} </h4>
//                  <div className="column">
//                  <ul className='list-unstyled'>
//                    <li><a href='#'> {item.links} </a></li>
//                    </ul>
//                   </div>
//           </div>

//           </>
//          ))}
//         </section>
//         </>
     
//     )
// }

{/* <>
<section className='main-footer'>
<div className="container">
  <div className="col">
 {FooterData.map((item, index) =>(
 <>
  <p className='footer--para'>
    {item.welcomeMsg}
  </p>
  <div className='col'>
         <h4> {item.title} </h4>
         <ul className='list-unstyled'>
           <li><a href='#'> {item.links} </a></li>
         </ul>
  </div>
  </>
 ))}
  </div>
</div>
</section>
</> */}


// import React from 'react'
// import IMAGES from './images.js'

// function footer() {
//   return (
//     <div className='main-footer'>
//         <div className='footer--para'>
//         <p>
//           Welcome to Yad2's vehicle panel! Thousands of vehicle ads appear every day, among which you can find vehicles from different years for sale. In addition, in the vehicle panel you can easily find vehicles from business advertisers. If you are debating between a Toyota Mazda or a Hyundai, we have all the tools to help you make the decision about your vehicle: collector vehicles, financing, magazine and guides, to find the best opportunity among the vehicles on the site. To start the search for a vehicle you want, you just need to enter the search data such as manufacturer, model, price and year and go. A good trip.
//         </p>
//         </div>
//         <div className='container'>
//             <div className='row'>
//                 {/* {Column1} */}
//                 <div className='col'>
//                     <h4>Real Estate</h4>
//                     <ul className="list-unstyled">
//                         {/* <h4>Real Estate</h4> */}
//                         <li><a href='#'>Sale</a></li>
//                         <li><a href='#'>Renting</a></li>
//                         <li><a href='#'>Partners</a></li>
//                         <li><a href='#'>Receiver</a></li>
//                         <li><a href='#'>New Apartments</a></li>
//                         <li><a href='#'>Yzer - Building smart decisons</a></li>
//                         <li><a href='#'>Yadada - Property Valuation</a></li>
//                     </ul>
//                 </div>
//                 {/* {Column2} */}
//                 <div className='col'>
//                 {/* <h4>Vehicle</h4> */}
//                     <ul className="list-unstyled">
//                        <h4>Vehicle</h4>
//                         <li>All vehicles</li>
//                         <li>Commercial</li>
//                         <li>Jeeps</li>
//                         <li>Trucks</li>
//                         <li>Motorcycles</li>
//                         <li>Scooters</li>
//                         <li>Vessel</li>
//                     </ul>
//                 </div>
//                  {/* {Column3} */}
//                  <div className='col'>
//                 {/* <h4>Second Hand</h4> */}
//                     <ul className="list-unstyled">
//                         <h4>Second Hand</h4>
//                         <li>For all products</li>
//                         <li>Commercial</li>
//                         <li>Furniture</li>
//                         <li>Cellular</li>
//                         <li>Appliances</li>
//                         <li>Bycycle</li>
//                     </ul>
//                 </div>
//                   {/* {Column4} */}
//                   <div className='col'>
//                 {/* <h4>Needed</h4> */}
//                     <ul className="list-unstyled">
//                         <h4>Needed</h4> 
//                         <li>All categories</li>
//                         <li>Leading companies</li>
//                         <li>Hi-Tech</li>
//                         <li>CV</li>
//                         <li>Carrer magazine</li>
//                         <li>Smart Agent</li>
//                     </ul>
//                 </div>
//                   {/* {Column5} */}
//                   <div className='col'>
//                 {/* <h4>More on the site</h4> */}
//                     <ul className="list-unstyled">
//                         <h4>More on the site</h4>
//                         <li>Pets</li>
//                         <li>Professionals</li>
//                         <li>Private teachers</li>
//                         <li>Tourism and recreation</li>
//                         <li>Second hand magazine</li>
//                     </ul>
//                 </div>
                


//             </div>
          
//         </div>
      
//         <div className='footer--icons'>
//           {
//              IMAGES.map( item => (
//              <div key= {item.id}>
//                 <img src={item.image} />
//              </div>
               
//             )
//             )
//           }
//               {/* <a href='#'><img src={require("../images/utube.png")} className="footer--logo" alt="This is a youtube logo"/></a>
//               <a href='#'><img src={require("../images/facebook.png")} className="footer--logo" alt="This is a facebook logo"/></a>
//               <a href='#'><img src={require("../images/play-store.png")} className="footer--logo" alt="This is a playstore logo"/></a>
//               <a href='#'><img src={require("../images/apple-logo.png")} className="footer--logo" alt="This is a apple logo"/></a> */}
//         </div>
    
//         <div className='footer--p'> 
//             <p>
//               All rights are reserved to the Coral Tel company operating the Yad2 board - bulletin board: IL wanted, apartments for rent, houses for sale, houses for rent, moving houses, moving Do not use all the contents that appear on the Yad2 board.
//             </p>
//             <hr/>
//             <div className='col--last'>
//                 <h4><a href='#'>Contact Us</a></h4>
//                 <h4><a href='#'>Site Map</a></h4>
//                 <h4><a href='#'>Privacy Policy</a></h4>
//                 <h4><a href='#'>Accessibilty Statement</a></h4>
//                 <h4><a href='#'>Terms</a></h4>
//             </div>
//             <div className='version'>
//                 <h3>Version:can</h3>
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default footer

