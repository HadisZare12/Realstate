import "./App.css"
import Navbar from './Component/Navbar/Navbar'
import React,{Fragment} from 'react'
import Home from "./Component/Home/Home";
import Property from "./Component/Property/Property";
import Service from "./Component/Service/Service";
import Work from "./Component/Work/Work";
import Accordion from "./Component/Accordion/Accordion";
import Counter from "./Component/Counter/Counter";
import Agent from "./Component/Agent/Agent";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Fragment>
      <Navbar/>
      <Home/>
      <Property/>
      <Service/>
      <Work/>
      <Accordion/>
      <Counter/>
      <Agent/>
      <Footer/>
      </Fragment>
      
    </div>
  );
}

export default App;
