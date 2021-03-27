import React from 'react'
import styled from "styled-components"
import Navigation from './navigation'
import HomeBackground from "../icons/Home.png";
import PlainBackground from "../icons/Plain.png";
import MapBackground from "../icons/GoalScreen.png";


const handleBackgroundType = type => {
  switch (type) {
    case "home":
      return `url(${HomeBackground})`;
    case "map":
      return `url(${MapBackground})`;
    case "plain":
      return `url(${PlainBackground})`;
    default:
      return `url(${HomeBackground})`;
  }
};



export const LayoutDiv = styled.div`
  background-image: ${({ type }) => handleBackgroundType(type)};;
  height: 100vh;
  overflow: scroll;
  background-size: cover;
`

export const Container = styled.div`
  padding: 0px 25px;
  padding-bottom: 100px;
  padding-top: 20px;
`
const Layout = ({ children, location= "", type= ""}) => {
  return (
    <>
      <Navigation location={location} />
      <LayoutDiv type={type}>
        <Container>
          <div>
            {children}
          </div>
        </Container>
      </LayoutDiv>
    </>
  )
}


export default Layout