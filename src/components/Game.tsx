import React, { useState, useEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
import Chat from './Chat';

interface GameState {
    others: any[];
    self: { cards: number[]};
    board: { card: number };
}

interface MatchParams {
    id: string;
}

interface GameProps {
    socket?: SocketIOClient.Socket;
    username: string;
}

const Game: React.FunctionComponent<GameProps> = (props) => {
    const [gameState, setGameState] = useState<GameState>();
    const [players, setPlayers] = useState<string[]>([]);
    const [owner, setOwner] = useState<string>('');
    const gameId = useRouteMatch<MatchParams>('/game/:id')?.params.id;

    const sendHandler = (message: string) => {
        props.socket?.emit('chat', gameId, message);
    }

    useEffect(() => {
        // fetch('http://localhost:5000/join-game', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ gameId: id }),
        //     credentials: 'include',
        // }).then((response) => {
        //     return response.json();
        // }).then((json) => {
        //     setPlayers(json.players);
        // });
        props.socket?.emit('join', gameId)
        props.socket?.on('players', ({ players, owner }: { players: string[]; owner: string }) => {
            setPlayers(players);
            setOwner(owner)
        });
    }, [props.socket, props.username])
    // useEffect(() => {
    //     setGameState({
    //         others: [
    //             {
    //                 name: 'player1',
    //                 cards: 13
    //             },
    //             {
    //                 name: 'player2',
    //                 cards: 13
    //             },
    //             {
    //                 name: 'player3',
    //                 cards: 13
    //             }
    //         ],
    //         self: {
    //             cards: [0, 12, 11, 10, 9]
    //         },
    //         board: {
    //             card: 0,
    //         }
    //     });
    //     // log into room
    //     props.socket?.emit('join', { id });
    // }, []);

    let cards;
    if (gameState !== undefined) {
        cards = gameState.self.cards.map((k) => {
            return <Card cardType={k}></Card>
        });
    }
    return <>
        <LeftColumn>
            {
                players.map((username) => {
                    if (username === props.username && username === owner) {
                        return <Box>
                            {username}
                            <br />
                            <button>Start Game</button>
                        </Box>
                    }
                    else {
                        return <Box>{username}</Box>;
                    }
                })  
            }
        </LeftColumn>
        <CenterColumn>  
            <Box>
                <Card cardType={gameState?.board.card ?? 0} />
            </Box>
            <Box style={{overflowX: 'scroll'}}>
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
    margin-bottom: 20px;
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

