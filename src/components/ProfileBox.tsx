import React from 'react';
import styled from 'styled-components';
import { UserInfo } from '../App';

interface ProfileBoxProps {
    userInfo: UserInfo;
}

const ProfileBox: React.FunctionComponent<ProfileBoxProps> = (props) => {
    return <Box>
        {props.userInfo.username ?? ''}
    </Box>;
}

const Box = styled.div`
    background-color: white;
    height: 200px; 
    box-shadow: 0px 0px 20px 0px #c0c0c0;
`;

export default ProfileBox;