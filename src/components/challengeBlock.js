import React from "react"
import styled from "styled-components"
import { gradient, purple, white } from "./base/colors"
import { Body, BodyBold } from "./base/fonts"

export const ChallengeContainer = styled.div`
    border-radius: 10px;
    background: ${white};
    padding: 25px; 
    display: flex;
    justify-content: space-between;
    box-shadow: 5px 7px 10px #8580801A;
    margin: 10px 3px;
`

export const ChallengeTitle = styled.div`
    color: ${purple};
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
        <BodyBold color={purple}>{challenge.title}</BodyBold>
        <Body>{challenge.currentDay} / {challenge.totalDays}</Body>
    </ChallengeContainer>
}

export default ChallengeBlock
