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
  Lorem,
  Image,
  Textarea,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import { storage } from "../config";
import ImageUpload from "./imageUpload";

// export const PhotoDisplay = styled.div`
//   width: 400px;
//   height: 400px;
//   border-radius: 50%;
//   overflow: hidden;
//   background: gray;
//   background-size: cover;
// `;

function EntryUpload() {
  let [value, setValue] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ImageUpload></ImageUpload>
          <ModalHeader>Add a Caption</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Text mb="8px">Value: {value}</Text> */}
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={onClose}>
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
