

import React, { Component } from 'react'
import "./App.css";
import MMI from "./components/mmi";
import TinkerTape from "./components/ticker-tape"
import Heading from './components/heading';
import Footer from './components/footer';
import Mid from './components/mid'
function App(){
  return(
    <div>
      <TinkerTape />
    <Heading/>
    <Mid />
    <MMI />
    <Footer />
    </div>
  )
}



export default App;
