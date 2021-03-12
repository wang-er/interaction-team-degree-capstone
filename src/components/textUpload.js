import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Textarea,
  Text,
} from "@chakra-ui/react";
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
      <Button colorScheme="blue" size="sm" onClick={onOpen}>
        Text Entry
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Text Entry</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="10px">
              Describe your progress and take time to reflect. How are you
              feeling? What went well? What can you improve on?
            </Text>
            <Textarea
              value={caption}
              onChange={handleInputChange}
              placeholder="Document here..."
              size="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={sendEntryToFirebase}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default TextUpload;
