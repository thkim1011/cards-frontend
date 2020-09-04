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
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Switch>
            <Route path="/game">
              <Game socket={socket}/>
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
    min-width: 700px;
    display: flex;
    flex-direction: row;
`;

export default App;
