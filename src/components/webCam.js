import React from "react";
import * as Webcam from "react-webcam";
import { Button } from "@chakra-ui/react";
import { SmallButton } from "./base/buttons"
import styled from "styled-components";

export const WebcamDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ButtonDiv = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 25px;
`

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
      <>
        {this.state.hideCam == false ? (
          <WebcamDiv>
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={500}
              videoConstraints={videoConstraints}
            />
            <ButtonDiv>
              <SmallButton onClick={this.capture.bind(this)}>Capture photo</SmallButton>
            </ButtonDiv>
          </WebcamDiv>
        ) : (
          <WebcamDiv>
            <img src={this.state.screenshot} height={500} />
            <ButtonDiv>
              <SmallButton onClick={this.showWebCam.bind(this)}>Retake</SmallButton>
            </ButtonDiv>
          </WebcamDiv>
        )}
      </>
    );
  }
}

export default WebCam;
