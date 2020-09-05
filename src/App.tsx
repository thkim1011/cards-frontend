import React, { useEffect, useState } from 'react';
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


export interface UserInfo {
  username?: string;
}

const ENDPOINT = 'http://localhost:5000';

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [socket, setSocket] = useState<SocketIOClient.Socket | undefined>(undefined);

  useEffect(() => {
    fetch(`${ENDPOINT}/get-user-info`, { credentials: 'include' }).then((res) => {
      return res.json();
    }).then((json) => {
      setUserInfo(json)
      setSocket(io(ENDPOINT));
    })
  }, []);

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
              <Home userInfo={userInfo}/>
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
