import React from "react";
import styled from "styled-components";
import { storage } from "../config";
import EntryUpload from "./entryUpload";
import TextUpload from "./textUpload";
import CameraUpload from "./cameraUpload";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Stack,
} from "@chakra-ui/react";
import BackgroundImage from "../icons/EntryButton.png"



export const MapPopover = styled(Popover)`
color: purple;
`

export const MapPopoverContent = styled(PopoverContent)`
background-color: white!important;
border: none!important;
border-radius: 25px!important;
`

export const MapPopoverHeader = styled(PopoverHeader)`
color: purple;
`

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
        <MapPopover>
          <PopoverTrigger>
            <Button backgroundSize="cover" right="1px" backgroundImage={`url(${BackgroundImage})`} _hover={{ backgroundImage: `url(${BackgroundImage})`}} _focus={{ backgroundImage: `url(${BackgroundImage})`}}  _active={{ backgroundImage: `url(${BackgroundImage})`}}></Button>
          </PopoverTrigger>
          <MapPopoverContent width="max-content" left="-56px" top="10px">
            {/* <MapPopoverHeader>Document!</MapPopoverHeader> */}
            <PopoverArrow />
            <PopoverBody padding="12px">
              <Stack>
                <CameraUpload
                  challengeID={this.props.challengeID}
                  entryID={this.props.entryID}
                ></CameraUpload>
                <EntryUpload
                  challengeID={this.props.challengeID}
                  entryID={this.props.entryID}
                ></EntryUpload>
                <TextUpload
                  challengeID={this.props.challengeID}
                  entryID={this.props.entryID}
                ></TextUpload>
              </Stack>
            </PopoverBody>
          </MapPopoverContent>
        </MapPopover>
      </>
    );
  }
}

export default EntryPopupMenu;
