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
} from "@chakra-ui/react";
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
      <Button colorScheme="blue" size="sm" onClick={onOpen}>
        Upload Media
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ImageUpload sendDataToParent={sendDataToParent}></ImageUpload>
          <ModalHeader>Add a Caption</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Text mb="8px">Value: {value}</Text> */}
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
export default EntryUpload;
