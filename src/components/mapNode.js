import React from "react"
import styled from "styled-components"

export const NodeContainer = styled.div`
  margin: 20px;
  width: 48px;
  height: 48px;
  position: relative;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
}
`

export const ButtonCircle = styled.div`
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

export const ButtonText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: #3A4E82CC;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    transition: 0.2s all;
    visibility: ${props => (props.isOpen ? "visible" : "hidden")};
    opacity: ${props => (props.isOpen ? "1" : "0")};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalContent = styled.div`
   color: white;
   font-size: 50px;
`



const MapNode = ({ data }) => {
    const [isOpen, setIsOpen] = React.useState(false)

    //SIN CURVES YEAH
    const strength = 90;
    const curveStrength = 0.4;
    const xPosition = Math.sin(data.id / (curveStrength * Math.PI)) * strength;
    var yPosition = 0;
    const hasData = (data.object !== undefined);
    const toggleModal = () => setIsOpen(!isOpen);

    return <NodeContainer x={xPosition} y={yPosition} key={data.id} onClick={toggleModal}>
        <ButtonCircle img={hasData ? "https://cdn.discordapp.com/attachments/336008480022593536/810745699436199956/c7txq9iogih61.png" : ""}>
            <ButtonText>
                {data.id}

                {hasData && (<div>{data.object.caption}</div>)}
            </ButtonText>
        </ButtonCircle>

        {//how to make this a single modal?
            hasData && (
                <Modal isOpen={isOpen}>
                    <ModalContent>
                        {data.object.caption}
                    </ModalContent>
                </Modal>
            )}
    </NodeContainer>

}

export default MapNode