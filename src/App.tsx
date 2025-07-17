// import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookNow from "./components/BookNow";

import './App.css'
import Navbar  from "@/components/Navbar";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';


function App() {
  
  return (
     <>
     <Navbar/>
     <Home/>
     <BookNow/>
     <AboutUs/>
     <ContactUs/>     
     </>
  )
}

export default App
