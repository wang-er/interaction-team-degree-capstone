import React from "react";
import styled from "styled-components";
import EntryPopupMenu from "./entryPopupMenu";
import BackgroundImage from "../icons/CompletedNode.png"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text
} from "@chakra-ui/react";
import { Button } from "./base/buttons";


export const NodeContainer = styled.div`
  margin: 20px;
  width: 48px;
  height: 48px;
  position: relative;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
}
`;

export const ButtonCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;

  /* node image will be set in entry pop up model, this isn't used */
  ${(props) =>
    props.state === "current" &&
    `
        /* background: blue; */
        /* background-image: url("https://pngimage.net/wp-content/uploads/2018/06/white-plus-sign-png.png"); */
        /* background-size: cover; */
    `}
  ${(props) =>
    props.state === "past" &&
    `
        background-image: url(${props.img});
        background-size: cover;
    `}
    ${(props) =>
    props.state === "future" &&
    `
        background: #EFEFEF;
    `}

    border: 5px solid white;
  box-sizing: border-box;
  box-shadow: 0 3px 4px grey;
`;

export const ButtonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const ImageDiv = styled.div`

`

// export const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   background: #3a4e82cc;
//   height: 100vh;
//   width: 100vw;
//   z-index: 1000;
//   transition: 0.2s all;
//   visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
//   opacity: ${(props) => (props.isOpen ? "1" : "0")};
//   display: flex;
//   flex-flow: column;
//   align-items: center;
//   justify-content: center;
// `;

// export const ModalContent = styled.div`
//   color: white;
//   font-size: 50px;
// `;

export const ModalImg = styled.img`
  // width: 30%;
`;

const MapNode = ({ data, challengeID }) => {
  // const [isOpen, setIsOpen] = React.useState(false);
  //SIN CURVES YEAH
  const { isOpen, onOpen, onClose } = useDisclosure();

  //data.id is to generate curves :)
  const strength = 90;
  const curveStrength = 0.4;
  const xPosition = Math.sin(data.day / (curveStrength * Math.PI)) * strength;
  var yPosition = 0;
  const hasData = data.state === "past";
  // const toggleModal = () => setIsOpen(!isOpen);

  //Tip of the day:
  //data.object returns the firebase entry object
  ///...orrr if there isn't an existing object, it's just {challengeID : [insertGivenChallengeID from mapNode.js], state: "future"}
  //if you wanna upload an image (aka. making a new entry), to connect it w/ it's associated challenge, use data.object.challengeID
  //maybe, I'll look at this later
  return (
    <NodeContainer
      x={xPosition}
      y={yPosition}
      key={data.id}
      onClick={onOpen}
    >
      <ButtonCircle state={data.state} img={(hasData && data.object.imgUrl !== undefined) ? data.object.imgUrl : BackgroundImage}>
        {data.state === "current" && (
          <EntryPopupMenu
            challengeID={challengeID}
            entryID={data.id}
          ></EntryPopupMenu>
        )}
        <ButtonText>
          {/* {data.id}
          {hasData && <div>{data.object.caption}</div>} */}
        </ButtonText>
      </ButtonCircle>

      {
        //how to make this a single modal? refactor to be instead hasData to just, the state of a node?
        hasData && (
          <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent  height="100vh" margin="0" borderRadius="0">
            <ModalHeader fontFamily="Work Sans" textTransform="uppercase">Entry {data.day}/{data.day}</ModalHeader>
            <ModalCloseButton />
            <ImageDiv>
                <ModalImg src={data.object.imgUrl}/>
            </ImageDiv>
            <ModalBody>
              {/* <Text mb="8px">Value: {value}</Text> */}
              <Text  marginTop="20px"
                padding="0"
                fontFamily="Work Sans"
                outline="none"
                border="none"
                _focus={{border: "none"}}
                _placeholder={{ color: '#776E81' }}>
                  {data.object.caption}
              </Text>
            </ModalBody>
            <ModalFooter justifyContent="center">
              <Button  onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

          // <Modal isOpen={isOpen}>
          //   <ModalImg src={data.object.imgUrl} />
          //   <ModalContent>{data.object.caption}</ModalContent>
          // </Modal>
        )
      }
    </NodeContainer>
  );
};

export default MapNode;
