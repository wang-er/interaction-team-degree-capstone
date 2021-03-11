import React from "react";
import * as Webcam from "react-webcam";
import { Button } from "@chakra-ui/react";

class WebCam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenshot: null, hideCam: false };
  }

  hideComponent() {
    this.setState({
      hideCam: true,
    });
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const screenshot = this.webcam.getScreenshot();
    this.setState({ screenshot: screenshot });
    this.props.sendDataToParent({ screenshot });
    this.hideComponent();
  };

  showWebCam = () => {
    this.setState({ hideCam: false });
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
        {this.state.hideCam == false ? (
          <div>
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={500}
              videoConstraints={videoConstraints}
            />
            <Button onClick={this.capture.bind(this)}>Capture photo</Button>
          </div>
        ) : (
          <div>
            <img src={this.state.screenshot} height={500} />
            <Button onClick={this.showWebCam.bind(this)}>Retake</Button>
          </div>
        )}
      </div>
    );
  }
}

export default WebCam;
