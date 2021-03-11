import React from "react"
import styled from "styled-components"

export const ChallengeContainer = styled.div`
    border-radius: 10px;
    background: grey;
    padding: 20px; 
    margin: 15px;
    height: 20vh;
`

export const ChallengeTitle = styled.div`
    color: white;
    padding-bottom: 8px;
    font-size: 24px;
`

export const ChallengeDay = styled.div`
    color: white;
    font-size: 18px;
`

//functional components?
const ChallengeBlock = ({ challenge }) => {
    return <ChallengeContainer>
        <ChallengeTitle>{challenge.title}</ChallengeTitle>
        <ChallengeDay>{challenge.currentDay} day</ChallengeDay>
    </ChallengeContainer>
}

export default ChallengeBlock
