import React from 'react'
import styled from "styled-components"



export const LayoutDiv = styled.div`
  background-color: #E0E0E0;
  height: 100vh;
  overflow: scroll;
`

export const Container = styled.div`
  padding-top: 50px;
`
const Layout = ({ children }) => {
    return (
      <LayoutDiv>
      <Container>
        <div>
        {children}
        </div>
      </Container>
      </LayoutDiv>
    )
  }


export default Layout