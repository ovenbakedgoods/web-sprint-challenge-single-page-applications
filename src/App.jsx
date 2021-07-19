import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home.jsx";
import {axios as ax} from "axios";

const App = () => {


  return (
   
    <div className='App'>
      
  <Home key = "x"/>
</div>
  );
};
export default App;
