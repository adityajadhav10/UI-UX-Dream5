import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Dashboard from '../components/Dashboard/Dashboard';


const App = () => {
    return (
              <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Redirect to="/" />
                </Switch>
              </Router>
    );
  }


export default App;