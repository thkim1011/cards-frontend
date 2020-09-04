import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const LobbyBox: React.FunctionComponent = () => {
    return <Box>
        <Card cardType={1}/>
    </Box> 
};

export default LobbyBox;

const Box = styled.div`
    background-color: white;
    height: 500px; 
    box-shadow: 0px 0px 20px 0px #c0c0c0;
`;