import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavbarCompo/Navbar'
import Home from "./Home"
import Footer from "./components/FooterComponets/Footer"
import FilterTop from "./components/Filter/FilterTop"

// const url = 'http://localhost:3001/'
function App() {

   return (
      <>
         <Router>
            {/* <Navbar /> */}
         </Router>
         {/* <TopIframe/> */}
         <FilterTop/>
         <Home/>
         <br /> <br /> <br /> <br /> <br /> <br />
         <Footer />
      </>

      // <Router>
      //   <div className='container'>
      //     <Routes>
      //       <Route path='/' element={<Home/>} />
      //     </Routes>
      //   </div>
      // </Router>


   )
}


export default App;
