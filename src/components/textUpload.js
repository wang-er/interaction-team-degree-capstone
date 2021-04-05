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
  Text,
} from "@chakra-ui/react";
import { SmallButton, Button } from "./base/buttons";
import { db } from "../config";

// This function component is responsible for uploading a text entry
function TextUpload(props) {
  let [imgUrl, setImgUrl] = React.useState(
    "http://assets.stickpng.com/images/5aa78e207603fc558cffbf19.png"
  );
  let [caption, setCaption] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  // used for text area caption
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setCaption(inputValue);
  };

  // Create official entry object and send to Firebase
  const sendEntryToFirebase = () => {
    db.ref("entries/" + props.entryID).set({
      id: props.entryID,
      caption: caption,
      // imgUrl: imgUrl,
      challengeID: props.challengeID,
    });
  };

  return (
    <>
      <SmallButton small onClick={onOpen}>
        Text Entry
      </SmallButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  height="100vh" margin="0" borderRadius="0">
          <ModalHeader fontFamily="Work Sans" textTransform="uppercase">Text Entry</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Text mb="10px">
              Describe your progress and take time to reflect. How are you
              feeling? What went well? What can you improve on?
            </Text> */}
            <Textarea
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
export default TextUpload;
