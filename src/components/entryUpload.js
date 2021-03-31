import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  // Button,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { SmallButton, Button } from "./base/buttons";

import { db } from "../config";
import ImageUpload from "./imageUpload";

// This function component is responsible for uploading a photo as an entry. It uses
// ImageUpload component.
function EntryUpload(props) {
  let [imgUrl, setImgUrl] = React.useState("");
  let [caption, setCaption] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  // used for text area caption
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setCaption(inputValue);
  };

  //  ImageUpload is a child component of EntryUpload. This function is used to send the image URL from child
  // to parent.
  const sendDataToParent = (obj) => {
    const url = JSON.stringify(obj.url);
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
        Upload Media
      </SmallButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  height="100vh" margin="0" borderRadius="0">
          <ModalHeader fontFamily="Work Sans" textTransform="uppercase">Upload a photo</ModalHeader>
          <ModalCloseButton />
          <ImageUpload sendDataToParent={sendDataToParent}></ImageUpload>
          <ModalBody>
            
            {/* <Text mb="8px">Value: {value}</Text> */}
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
            <Button  onClick={sendEntryToFirebase}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default EntryUpload;
