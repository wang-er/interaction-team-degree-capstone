import React from 'react'
import styled from "styled-components"
import Navigation from './navigation'



export const LayoutDiv = styled.div`
  background-color: #E0E0E0;
  height: 100vh;
  overflow: scroll;
`

export const Container = styled.div`
  padding-bottom: 75px;
  padding-top: 20px;

`
const Layout = ({ children, location = "" }) => {
  return (
    <>
      <Navigation location={location} />
      <LayoutDiv>
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