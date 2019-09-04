import React from 'react';
import './App.css';
import 'typeface-roboto';
import Header from './header';
import Slider from './slider';
import About from './about';
import Gallery from './gallery';



export default function App() {
  
  return (
    <div className="App">
     <Header/>
     <Slider/>
     <About/>
     <Gallery/>
    </div>
  );
}


