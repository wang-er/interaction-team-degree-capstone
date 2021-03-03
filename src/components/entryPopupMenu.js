import React from "react";
import { storage } from "../config";
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
  Stack,
} from "@chakra-ui/react";

// const toggleUploadModal = false;

class EntryPopupMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <Button>+</Button>
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
        <EntryUpload
          challengeID={this.props.challengeID}
          entryID={this.props.entryID}
        />
      </>
    );
  }
}

export default EntryPopupMenu;
