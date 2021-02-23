import React from "react"
import styled from "styled-components"

export const NodeContainer = styled.div `
  margin: 20px;
  width: 48px;
  height: 48px;
  position: relative;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
}
`

export const ButtonCircle = styled.div `
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background: #EFEFEF;
    background-image: url(${props => props.img});
    background-size: cover;
    border: 5px solid white; 
    box-sizing: border-box;
    box-shadow: 0 3px 4px grey;
`

export const ButtonText = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`



const MapNode = ({ id }) => {
    //SIN CURVES YEAH
    const strength = 90;
    const curveStrength = 0.4;
    const xPosition = Math.sin(id/(curveStrength*Math.PI)) * strength;
    var yPosition = 0;

    //Map node is given id content data, so not just id, but also on the database
    // 

  return <NodeContainer x={xPosition} y={yPosition} key={id}>
      <ButtonCircle img="https://cdn.discordapp.com/attachments/336008480022593536/810745699436199956/c7txq9iogih61.png">
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