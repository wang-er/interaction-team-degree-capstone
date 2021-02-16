import React from "react"
import styled from "styled-components"

export const NodeContainer = styled.div `
  margin: 10px;
  width: 48px;
  height: 48px;

`

export const ButtonCircle = styled.div `
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background: #EFEFEF;
    border: 7px solid white; 
    box-sizing: border-box;
    box-shadow: 0 3px 4px grey;
`

export const ButtonText = styled.div `
    display:block;
    float:left;
    // width:100%;
    // padding-top:50%;
    // padding-bottom:50%;
    // line-height:1em;
    // margin-top:-0.5em;
          
    // text-align:center;
    // color:#e2eaf3;
    // font-family:Verdana;
    // font-size:1.2em;
    // font-weight:bold;
    // text-decoration:none;
`



const MapNode = ({ id }) => {
  return <NodeContainer key={id}>
      <ButtonCircle>
          <ButtonText>
              {id}
          </ButtonText>
      </ButtonCircle>

  </NodeContainer>

}

export default MapNode

// export default ({ faqQuestion }) => (
//   <> 
//   {faqQuestion.question},
//   {faqQuestion.answer.answer}
//   </>
// )