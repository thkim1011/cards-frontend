import React, { useState, useEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';

interface GameState {
    others: any[];
    self: { cards: number[]};
}

const Game: React.FunctionComponent = () => {
    const [gameState, setGameState] = useState<GameState>();
    
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
        })
    }, []);

    let cards;
    if (gameState !== undefined) {
        cards = gameState.self.cards.map((k) => {
            return <Card cardType={k}></Card>
        });
    }
    return <Box>
        {cards}
    </Box>;
};

export default Game;

const Box = styled.div`
    background-color: white;
    width: 1000px;
    box-shadow: 0px 0px 20px 0px #c0c0c0;
`;