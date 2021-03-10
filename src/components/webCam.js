import React from "react";
import * as Webcam from "react-webcam";
import { Button } from "@chakra-ui/react";

class WebCam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenshot: "" };
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const screenshot = this.webcam.getScreenshot();
    this.setState({ screenshot: screenshot });
    this.props.sendDataToParent({ screenshot });

    console.log(screenshot);
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user",
    };

    return (
      <div>
        <br></br>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />
        <Button onClick={this.capture.bind(this)}>Capture photo</Button>
        {this.state.screenshot ? (
          <img src={this.state.screenshot} height={500} />
        ) : null}
      </div>
    );
  }
}

export default WebCam;
