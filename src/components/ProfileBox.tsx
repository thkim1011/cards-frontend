import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ENDPOINT = 'http://localhost:5000';

const ProfileBox: React.FunctionComponent = () => {
    const [profileName, setProfileName] = useState('');

    useEffect(() => {
        fetch(`${ENDPOINT}/user-info`).then((res) => {
            return res.text();
        }).then((text) => {
            setProfileName(text);
        })
    }, []);
    return <Box>
        {profileName}
    </Box>;
}

const Box = styled.div`
    background-color: white;
    height: 200px; 
    box-shadow: 0px 0px 20px 0px #c0c0c0;
`;

export default ProfileBox;