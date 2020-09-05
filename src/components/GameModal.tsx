import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface GameModalProps {
  show: boolean;
  closeHandler: () => void;
}

const ENDPOINT = 'http://localhost:5000';


const GameModal: React.FunctionComponent<GameModalProps> = (props) => {
  const history = useHistory();
  const [gameType, setGameType] = useState<string>('big-two');
  const [numPlayers, setNumPlayers] = useState<number>(4);

  const onSubmit = async () => {
    console.log('New game called')
    const response = await fetch(`${ENDPOINT}/new-game`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gameType, numPlayers }),
      credentials: 'include',
    });
    const response_body = await response.json();
    history.push(`/game/${response_body.gameId}`)
  }

  if (!props.show) {
    return null;
  }
  return (
    <BackgroundBox>
      <ModalBox>
          <label>
            Game Type:
            <select value={gameType} onChange={(event) => setGameType(event.target.value)}>
              <option value="big-two">Big Two</option>
              <option value="poker">Poker</option>
            </select>
          </label><br />
          <label>
            Number of Players:
            <select value={numPlayers} onChange={(event) => setNumPlayers(parseInt(event.target.value))}>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select><br />
          </label>
          <button onClick={props.closeHandler}>Close The Modal</button>
          <button onClick={() => {onSubmit()}}>Submit</button>
      </ModalBox>
    </BackgroundBox>
  );
};

export default GameModal;

const BackgroundBox = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 9002;
`;

const ModalBox = styled.div`
    width: 500px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 300px;
    background-color: white;
    z-index: 9003;
`;