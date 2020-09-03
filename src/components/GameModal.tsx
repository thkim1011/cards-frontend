import React from 'react';
import styled from 'styled-components';

interface GameModalProps {
    show: boolean;
    closeHandler: () => void;
}
const GameModal : React.FunctionComponent<GameModalProps> = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <BackgroundBox>
            <ModalBox>
                <form>
                    <label>
                        Game Type:
                        <select>
                            <option value="big-two">Big Two</option>
                            <option value="poker">Poker</option>
                        </select>
                    </label><br />
                    <label>
                        Number of Players:
                        <select>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select><br />
                    </label>
                    <button>Submit</button>
                    <button onClick={props.closeHandler}>Close The Modal</button> 
                </form>
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