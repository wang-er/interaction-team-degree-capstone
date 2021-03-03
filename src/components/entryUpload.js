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
import styled from "styled-components";
import { db } from "../config";
import ImageUpload from "./imageUpload";

function EntryUpload(props) {
  // let [value, setValue] = React.useState("");
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
    // the callback. Use a better name
    console.log("sendDataToParent: " + { obj });
    console.log(JSON.stringify(obj));

    const url = JSON.stringify(obj);
    setImgUrl(url);
    console.log("imgUrl is: " + imgUrl);
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
      <Button onClick={onOpen}>Upload Media</Button>

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
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={sendEntryToFirebase}>
              Save
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default EntryUpload;
