import React from "react";
import { storage } from "../config";
// import Modal from "./mapNode";
import ModalImg from "./mapNode";
import EntryUpload from "./entryUpload";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Flex,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  // Button,
  useDisclosure,
  Lorem,
  Textarea,
} from "@chakra-ui/react";

// const toggleUploadModal = false;

class EntryPopupMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.key,
      caption: props.caption,
      fileType: props.fileType,
      fileURL: "",
      nodeType: props.nodeType,
      image: null,
      // toggleUploadModal: false,
    };
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  // upload photo
  uploadPhoto = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    console.log(image.name);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url });
          });
      }
    );
  };

  render() {
    return (
      <>
        <Popover>
          <PopoverTrigger>
            <Button>New entry</Button>
          </PopoverTrigger>
          <PopoverContent width="200px">
            <PopoverHeader>Document!</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Stack>
                <Button colorScheme="blue" size="sm">
                  Camera
                </Button>

                <Button colorScheme="blue" size="sm">
                  Upload Media
                </Button>
                <Button colorScheme="blue" size="sm">
                  Text Entry
                </Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <EntryUpload />
      </>
    );
  }
}

export default EntryPopupMenu;
