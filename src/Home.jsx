import React from "react";
import Form from "./Form";
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

 export default function Home () {
    return (
     
      <div className='Home'>
      <Router>
      <Switch>
          <Route exact path="/pizza">
            <Form />
          </Route>
          <Route exact path="/">
          <h1 className='store-header'>Polly Pocket&apos;s Pizza</h1>  
          <div className='nav-links'>
      <nav>
      <Router>
      <Link to="/pizza">Order a Pizza</Link>
      </Router>
        </nav>
        </div>
          </Route>
          </Switch>
          </Router>
  </div>
    );
  };
  