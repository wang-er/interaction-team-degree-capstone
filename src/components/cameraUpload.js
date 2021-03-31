import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
  // Button
} from "@chakra-ui/react";
import { db } from "../config";
import WebCam from "./webCam";
import { SmallButton, Button } from "./base/buttons";


// This function component is responsible for uploading a photo as an entry.
// Parent of Webcam component.
function CameraUpload(props) {
  let [imgUrl, setImgUrl] = React.useState("");
  let [caption, setCaption] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  // used for text area caption
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setCaption(inputValue);
  };

  //  WebCam is a child component of CameraUpload. This function is used to send the image URL from child
  // to parent.
  const sendDataToParent = (obj) => {
    const url = JSON.stringify(obj.screenshot);
    // remove unwanted slashes in front and back of String before we set it as img url and store it in firebase
    var result = url.substring(1, url.length - 1);
    setImgUrl(result);
  };

  // Create official entry object and send to Firebase
  const sendEntryToFirebase = () => {
    db.ref("entries/" + props.entryID).set({
      id: props.entryID,
      caption: caption,
      imgUrl: imgUrl,
      challengeID: props.challengeID,
    });
  };

  return (
    <>
      <SmallButton onClick={onOpen}>
        Camera
      </SmallButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  height="100vh" margin="0" borderRadius="0">
          <ModalHeader fontFamily="Work Sans" textTransform="uppercase">Take a photo</ModalHeader>
          <ModalCloseButton />
          <WebCam sendDataToParent={sendDataToParent}></WebCam>

          <ModalBody>
            <Textarea  marginTop="20px"
              value={caption}
              onChange={handleInputChange}
              placeholder="How are you feeling? What went well? What can you improve on?"
              padding="0"
              fontFamily="Work Sans"
              outline="none"
              border="none"
              _focus={{border: "none"}}
              _placeholder={{ color: '#776E81' }}
            />
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button onClick={sendEntryToFirebase}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default CameraUpload;
