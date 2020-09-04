import React, {useState} from 'react';
import GameModal from './GameModal';
import ProfileBox from './ProfileBox';
import LobbyBox from './LobbyBox';
import styled from 'styled-components';

const ENDPOINT = 'http://localhost:5000';

const Home: React.FunctionComponent = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const closeModalHandler = () => {
        setShowModal(false);
    }

    return (
        <>
            <GameModal show={showModal} closeHandler={closeModalHandler}/>
                <LeftColumn>
                    <ProfileBox />
                </LeftColumn>
                <CenterColumn>
                    <LobbyBox />
                </CenterColumn>
                <RightColumn>
                    <button onClick={() => {setShowModal(true)}}>Create New Game</button>
                </RightColumn>
        </>
    );
    
}

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

export default Home;