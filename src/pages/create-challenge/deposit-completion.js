import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { white } from "../../components/base/colors";
import { Body, BodySmall, H2 } from "../../components/base/fonts";
import { Button } from "../../components/base/buttons";

import { LayoutDiv } from "../../components/layout";
import BackgroundImage from "../../icons/CompletedNode.png";
import GoalCreatedGIF from "../../icons/goal-created.gif";

export const CompletionLayout = styled(LayoutDiv)`
  background-color: #e0e0e0;
  overflow: hidden;
  z-index: 10000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SlideBox = styled.div`
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    padding: 0px 35px;
    height: 100vh;
    width: 100vw;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.5s;
    }
`;

export const DemoImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const CarouselButton = styled.button`
  border: none;
  font-weight: bold;
  color: ${(props) => (props.isFilled ? "white" : "blue")};
  padding: 10px;
  background-color: ${(props) => (props.isFilled ? "blue" : "transparent")};
  border: 1px solid blue;
  border-radius: 3px;
  margin: 10px;
  text-decoration: none;

  a {
    text-decoration: none;
    color: ${(props) => (props.isFilled ? "white" : "blue")};
  }
`;

export const PaymentInput = styled.div`
  position: relative;
  input {
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const CreditImg = styled.img`
  position: absolute;
  top: 13px;
  left: 10px;
`;

export const EditImg = styled.img`
  position: absolute;
  top: 13px;
  right: 15px;
`;

export const AwardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 50px;
`;

export const TapMessage = styled(Body)`
  position: absolute;
  margin-top: -220px;
`;

export const NodeContainer = styled.div`
  margin-top: 20px;
  width: 48px;
  height: 48px;
  position: relative;
//   left: ${(props) => props.x}px;
//   top: ${(props) => props.y}px;
}
`;

export const ButtonCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border: 5px solid white;
  box-sizing: border-box;
  box-shadow: 0 2px 6px #3508083a;
`;

export const BackButton = styled(Link)`
  position: fixed;
  top: 25px;
  right: 18px;
  width: 25px;
  z-index: 1000;
`;

const DepositCompletionPage = () => {
  const history = useHistory();

  // const data = this.props.history.location.state?.data

  return (
    <CompletionLayout type="map">
      <AwardDiv>
        <div style={{ alignSelf: "center" }}>
          <img src={GoalCreatedGIF} />
        </div>
        <div>
          <H2
            color={white}
            style={{
              textAlign: "center",
              marginLeft: "30px",
              marginRight: "30px",
            }}
          >
            Congrats on your deposit!
          </H2>
          <br />
        </div>
        <div style={{ alignSelf: "center" }}>
          <Button onClick={console.log("Start")}>Start Journey</Button>
        </div>
        <br />
        <br />
      </AwardDiv>
    </CompletionLayout>
  );
};

export default DepositCompletionPage;
