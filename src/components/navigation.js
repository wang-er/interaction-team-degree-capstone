import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import { WalletSVG, SettingsSVG, GoalsSVG }  from '../icons/icons';
import { darkPurple, red, white } from './base/colors';

export const NavigationWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    bottom: 0;
    z-index: 1000;
    height: 75px;
    width: 100vw;
    background: ${white};
    box-shadow: 0px 0px 7px #C0C1C9;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px 25px 0px 0px;
    padding: 0px 20px;
`

export const MenuItem = styled(Link)`
    text-decoration: none;
    color: ${({ location }) => (location ? red : "yellow")};
    font-size: 20px;
    word-wrap: normal;
`

export const MenuIcon = styled.img`
`

const Navigation = ({location}) => {

  const isHighlighted = (givenLocation) => {
    console.log(givenLocation == location);
    return givenLocation == location;
  }
  return (
    <NavigationWrapper>
      <MenuItem to="/home" location={isHighlighted("home")}>
        <GoalsSVG isHighlighted={isHighlighted("home")}/>
        </MenuItem>
      <MenuItem to="/wallet" location={isHighlighted("wallet")}> 
      <WalletSVG isHighlighted={isHighlighted("wallet")}/>
      </MenuItem>
      <MenuItem to="/settings" location={isHighlighted("settings")}>
         <SettingsSVG isHighlighted={isHighlighted("settings")}/>
      </MenuItem>
    </NavigationWrapper>
  );
};

export default Navigation