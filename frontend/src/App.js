import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavbarCompo/Navbar'
import Main from "./Main"
import Footer from "./components/FooterComponets/Footer"
import FilterMain from "./components/Filter/FilterMain"
import NavbarYona from './components/NavbarCompo/NavbarYona'
import Header from './components/NavbarCompo/Header'
import './index.css'

// const url = 'http://localhost:3001/'
function App() {

   return (
      <>
         <Router>
         <NavbarYona /> 
         <Header/>
         </Router>
         <Main />  <br /> <br />
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
