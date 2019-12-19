import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Dashboard from '../components/Dashboard/Dashboard';
import TeamStandings from '../components/Standings/Team-Standings'
import CreateTeam from '../components/Team/createTeam';

const App = () => {
    return (
              <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/team-standings" component={TeamStandings} />
                    <Route exact path="/createTeam" component={CreateTeam} />
                    <Redirect to="/" />
                </Switch>
              </Router>
    );
  }


export default App;