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

// export const NavigationWrapper = styled.div`
//     position: fixed;
//     display: flex;
//     flex-direction: column;
//     left: 0;
//     top: 0;
//     z-index: 1000;
// `
// export const MenuGroup = styled.div`
//     max-width: ${props => (props.isOpen ? '70vw' : '0vw')};
//     transition: all 0.5s;
//     overflow: hidden;
//     background-color: white;
//     height: 100vh;
//     padding-top: 75px;
//     width: 70vw;
// `



// export const MenuButton = styled.button`
//   margin: 10px;
//   padding: 20px;
//   white-space: nowrap;
//   background-color: skyblue;
//   border-radius: 10px;
//   border: none;


//   a {
//     text-decoration: none;
//     color: black;
//     font-size: 20px;
//   }
// `


// export const HamburgerIcon = styled.img`
//     position: absolute;
//     width: 30px;
//     height: 30px;
//     display: inline;
//     top: 20px;
//     left: 20px;
//     max-width: none;
// `


const Navigation = ({location}) => {
  // const [open, setIsOpen] = React.useState(false);
  // const toggle = () => setIsOpen(!open);

  const isHighlighted = (givenLocation) => {
    console.log(givenLocation == location);
    return givenLocation == location;
  }
  return (
    // <NavigationWrapper>
    //   <HamburgerIcon src={'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/hamburger.png'} onClick={toggle} />
    //   <MenuGroup isOpen={open}>
    //     <MenuButton>
    //       <Link to="/">
    //         Create New Challenge
    //           </Link>
    //     </MenuButton>
    //     <MenuItem>
    //       <Link to="/home">
    //         Home
    //           </Link>
    //     </MenuItem>
    //     <MenuItem>
    //       <Link to="/map">
    //         Map
    //           </Link>
    //     </MenuItem>
    //     <MenuItem>
    //       <Link to="/account">
    //         Account
    //           </Link>
    //     </MenuItem>
    //     <MenuItem>
    //       <Link to="/faq">
    //         FAQ
    //           </Link>
    //     </MenuItem>
    //     <MenuItem>
    //       <Link to="/settings">
    //         Settings
    //           </Link>
    //     </MenuItem>
    //     <MenuItem>
    //       <Link to="/logout">
    //         Logout
    //           </Link>
    //     </MenuItem>
    //   </MenuGroup>
    // </NavigationWrapper>
    <NavigationWrapper>
      <MenuItem to="/home" location={isHighlighted("home")}>
        <GoalsSVG isHighlighted={isHighlighted("home")}/>
        </MenuItem>
      <MenuItem to="/" location={isHighlighted("wallet")}> 
      <WalletSVG isHighlighted={isHighlighted("wallet")}/>
      </MenuItem>
      <MenuItem to="/settings" location={isHighlighted("settings")}>
         <SettingsSVG isHighlighted={isHighlighted("settings")}/>
      </MenuItem>
    </NavigationWrapper>
  );
};

export default Navigation