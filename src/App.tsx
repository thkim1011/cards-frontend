import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route> 
        </Switch>
      </div>
    </Router>
      );
}

export default App;
