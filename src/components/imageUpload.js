import React, { Component } from "react";
import { storage } from "../config";
import { Button, Image } from "@chakra-ui/react";

// Credit to Github user @ClintPy for Image-Uploader-React-Firebase
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      url: "",
      progress: 0,
      captionInput: "",
    };
  }

  sendURLtoEntryUpload(imgUrl) {
    this.props.sendData(imgUrl);
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
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
    // send image url to parent component (EntryUpload)
    this.props.sendDataToParent(this.state.url);
    console.log("poo");
  };

  render(props) {
    return (
      <>
        <Image src={this.state.url || "https://via.placeholder.com/150"} />
        {console.log(this.state.url)}
        <input type="file" id="file-upload" onChange={this.handleChange} />
        <Button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </Button>
      </>
    );
  }
}

export default ImageUpload;
