import React, { Component } from 'react';
import EventDetails from './components/EventDetails';
import EventsList from './components/EventsList';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/events" component={EventsList} />
          <Route exact path="/events/:id" component={EventDetails} />
          <Route exact path="/" render={ () => <Redirect to="/events" /> } />
        </div>
      </Router>
    )
  }
}

export default App;
