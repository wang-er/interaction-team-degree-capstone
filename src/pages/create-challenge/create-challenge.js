import { Button } from "@chakra-ui/button";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import ConfirmGoalPage from "./confirm-goal-page";
import CreateRewardPage from "./create-reward";
import DepositAnimationPage from "./deposit-animation-page";
import MotivePage from "./motive-page";
import PaymentDetailsPage from "./payment-details-page";
import SetUpGoalPage from "./setup-goal-page";

export const BoardingLayout = styled.div`
  background-color: #e0e0e0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 10000000;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const SlideBox = styled.div`
  display: flex;
  padding: 0px 35px;
  height: 60vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.5s;

  // enter from
  &.fade-enter {
    opacity: 0;
    position: fixed;
    transform: translateX(100vw);
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
    position: fixed;
    transform: translateX(100vw);
  }

  // exit from
  &.fade-exit {
    opacity: 1;
    transform: translateX(-100vw);
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
    transform: translateX(-100vw);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NextButton = styled.div`
  font-weight: bold;
  color: white;
  padding: 10px;
  background-color: blue;
  border-radius: 3px;
  margin: 10px;
`;

export const FAQButton = styled.div`
  font-weight: bold;
  color: white;
  padding: 10px;
  border: 3px solid blue;
  border-radius: 3px;
  margin: 10px;
`;

export const SkipButton = styled.div`
  font-weight: bold;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

export const SignupButton = styled.div`
  font-weight: bold;
  padding: 10px;
  margin: 10px;
`;

export const CarouselButton = styled.button`
  border: none;
  font-weight: bold;
  color: ${(props) => (props.isFilled ? "white" : "blue")};
  padding: 10px;
  margin-top: 1000px;
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

export const OnboardingHeader = styled.div`
  font-size: 30px;
`;

export const OnboardingTextBox = styled.div`
  align-items: center;
  display: flex;
`;

export const DemoImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const CarouselDotList = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const CarouselDot = styled.div`
  height: 6px;
  width: 6px;
  background-color: ${(props) => (props.isActive ? "purple" : "#bbb")};
  transition: all 0.2s;
  border-radius: 50%;
  display: inline-block;
  margin: 0px 5px;
`;

export const CarouselButtons = styled.div``;

export const CreateChallengeLayout = styled.div`
  background-color: #e0e0e0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 10000000;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const CreateChallengePage = () => {
  const [index, setIndex] = React.useState(0);
  let component;

  const leftClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(0);
    }
  };

  const rightClick = () => {
    console.log(index);
    console.log("max");
    console.log(maxIndex);
    if (index < maxIndex) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  // Stores the different pages inside the create challenge flow. Renders appropriate page
  // based on index from user's click
  const routes = {
    0: <SetUpGoalPage />,
    1: <CreateRewardPage />,
    2: <MotivePage />,
    3: <ConfirmGoalPage />,
    4: <PaymentDetailsPage />,
    5: <DepositAnimationPage />,
  };
  const maxIndex = Object.keys(routes).length - 1;

  return (
    <CreateChallengeLayout>
      {routes[index]}
      <ButtonsContainer>
        {index === 0 && (
          <CarouselButtons key="carousel">
            <CarouselButton isFilled key="button2" onClick={rightClick}>
              Next
            </CarouselButton>
          </CarouselButtons>
        )}
        {index !== maxIndex && index !== 0 && (
          <CarouselButtons key="carousel">
            <CarouselButton key="button1" onClick={leftClick}>
              Back
            </CarouselButton>
            <CarouselButton isFilled key="button2" onClick={rightClick}>
              Next
            </CarouselButton>
          </CarouselButtons>
        )}
        {index === maxIndex && (
          <CarouselButtons key="carousel">
            <CarouselButton key="button1" onClick={leftClick}>
              Back
            </CarouselButton>
            <CarouselButton
              isFilled
              key="button2"
              onClick={() => alert("open animation here??")}
            >
              Confirm Payment
            </CarouselButton>
            <CarouselButton isFilled="false" key="button2">
              Skip Payment
            </CarouselButton>
          </CarouselButtons>
        )}
      </ButtonsContainer>
    </CreateChallengeLayout>
  );
};

export default CreateChallengePage;
