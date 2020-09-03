import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';
import Game from './components/Game';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Wrapper>
      </div>
    </Router>
      );
}

const Wrapper = styled.div`
    padding-top: 100px;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    min-width: 700px;
    display: flex;
    flex-direction: row;
`;

export default App;
