import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import CityWeather from "./components/CityWeather.jsx";
import FindWeather from "./components/FindWeather.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
          <Route path='/cityweather/:city?' element={<CityWeather />} />
          <Route path='/findweather' element={<FindWeather />} />
          <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
