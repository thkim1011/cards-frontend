import React, { useState, useEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
import Chat from './Chat';

interface GameState {
    others: any[];
    self: { cards: number[]};
}

interface MatchParams {
    id: string;
}

interface GameProps {
    socket?: SocketIOClient.Socket;
}

const Game: React.FunctionComponent<GameProps> = (props) => {
    const [gameState, setGameState] = useState<GameState>();
    const id = useRouteMatch<MatchParams>('/game/:id')?.params.id;

    const sendHandler = (message: string) => {
        props.socket?.send(message);
    }

    useEffect(() => {
        setGameState({
            others: [
                {
                    name: 'player1',
                    cards: 13
                },
                {
                    name: 'player2',
                    cards: 13
                },
                {
                    name: 'player3',
                    cards: 13
                }
            ],
            self: {
                cards: [0, 12, 11, 10, 9]
            }
        });
        // log into room
        props.socket?.emit('join', {username: 'test', id });
    }, []);

    let cards;
    if (gameState !== undefined) {
        cards = gameState.self.cards.map((k) => {
            return <Card cardType={k}></Card>
        });
    }
    return <>
        <LeftColumn></LeftColumn>
        <CenterColumn>  
            <Box>
                {cards}
            </Box>;
        </CenterColumn>
        <RightColumn>
            <Chat sendHandler={sendHandler} socket={props.socket}/>
        </RightColumn>
    </>;
  };

export default Game;

const Box = styled.div`
    background-color: white;
    box-shadow: 0px 0px 20px 0px #c0c0c0;
`;

const LeftColumn = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const CenterColumn = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
`;

const RightColumn = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`;

