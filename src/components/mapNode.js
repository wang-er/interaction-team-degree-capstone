import styled from "styled-components";
import { storage } from "../config";
import React, { useState, useEffect } from "react";

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
  background: #efefef;
  background-image: url(${(props) => props.img});
  background-size: cover;
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

// load pictures
// const FetchImage = async () => {
//   const [pictureURL, setPictureURL] = useState([]);

//   useEffect(() => {
//     console.log("fetch is being called");
//     var storageRef = storage.ref("images/winnie_the_crabs.jpeg");
//     /// map() array of the imageRef.getDownloadURL() promises
//     let urlPromises = storageRef.getDownloadURL();
//     console.log(urlPromises);
//     // return all resolved promises
//     return Promise.resolve(urlPromises);
//   });
// };

const MapNode = ({ id }) => {
  //SIN CURVES YEAH
  const strength = 90;
  const curveStrength = 0.4;
  const xPosition = Math.sin(id / (curveStrength * Math.PI)) * strength;
  var yPosition = 0;
  const [pictureURL, setPictureURL] = useState([]);

  const [imageUrl, setImageUrl] = useState(undefined);

  useEffect(() => {
    /// NEED TO CHANGE HARD CODED TO RETRIEVE "CHILD" IMAGES WE CAN MAP THROUGH
    storage
      .ref("images/winnie_the_crabs.jpeg") //name in storage in firebase console
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url);
      })
      .catch((e) => console.log("Errors while downloading => ", e));
  }, []);

  //Map node is given id content data, so not just id, but also on the database
  //

  return (
    <NodeContainer x={xPosition} y={yPosition} key={id}>
      {/* <ButtonCircle img="https://cdn.discordapp.com/attachments/336008480022593536/810745699436199956/c7txq9iogih61.png"> */}
      <ButtonCircle img={imageUrl}>
        <ButtonText>{id}</ButtonText>
      </ButtonCircle>
    </NodeContainer>
  );
};

export default MapNode;

// export default ({ faqQuestion }) => (
//   <>
//   {faqQuestion.question},
//   {faqQuestion.answer.answer}
//   </>
// )
