import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome';
import Clock from './components/clock/clock';
import Contact from './components/contact/contact';
import Navigation from './components/navigation/navigations'; 
import Error from './components/error/error' ;
import {Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route exact path="/" render={(props) => <Welcome {...props} name="Malachi" />} />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route path="/error" component={Error} />
      <Route path="/Welcome/:name" render={(props) => <Welcome {...props} name={props.match.params.name}/>} />
      </Switch>
    </div>
  );
}

export default App;
