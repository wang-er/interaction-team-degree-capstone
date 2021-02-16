import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"

export const MenuItem = styled.div`
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
`

export const MenuGroup = styled.div`
 max-width: ${ props => (props.isOpen ? '500px': '0px')};
 overflow: hidden;
`


export const HamburgerIcon = styled.img`
    width: 30px;
    height: 30px;
    display: inline;
`

export const NavigationWrapper = styled.div`
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
`

const Navigation = () => {
    const [open, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!open);

    return (
        <NavigationWrapper>
        <HamburgerIcon src={'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/hamburger.png'} onClick={toggle}/>
        <MenuGroup isOpen={open}>
            <MenuItem>
                <Link to="/">
                    Home
              </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/map">
                    Map
              </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/account">
                    Account
              </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/faq">
                    FAQ
              </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/settings">
                    Settings
              </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/logout">
                    Logout
              </Link>
            </MenuItem>
        </MenuGroup>
        </NavigationWrapper>
    );
};

export default Navigation