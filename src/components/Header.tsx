import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = () => {
  return (
    <Nav>
      <HeaderLink to="/">Card Games</HeaderLink>
      <StyledLink to="/about">About</StyledLink>
    </Nav>
  )
}

const StyledLink = styled(Link)`
  text-align: center; 
  line-height: 80px;
  padding-left: 10px;
  padding-right: 10px;
`;

const HeaderLink = styled(Link)`
  text-alignt: center;
  line-height: 80px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 30px;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
`;

const Nav = styled.nav`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 80px;
  color: black;
  font-size: 15px;
  background-color: white;
  z-index: 9001;
  transition: height 0.2s;
  box-shadow: 0px 0px 20px 0px #c0c0c0;
`;

export default Header;