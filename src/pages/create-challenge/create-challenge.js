import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ConfirmGoalPage from "./confirm-goal-page";
import CreateRewardPage from "./create-reward";
import MotivePage from "./motive-page";
import PaymentDetailsPage from "./payment-details-page";
import SetUpGoalPage from "./setup-goal-page";
import { db } from "../../config";

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

export const SkipButton = styled.div`
  font-weight: bold;
  padding: 10px;
  margin: 10px;
  text-align: center;
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

const CreateChallengePage = (props) => {
  const [index, setIndex] = React.useState(0);
  // setup-goal-page gives these values
  const [challengeName, setChallengeName] = React.useState("");
  const [frequency, setChallengeFrequency] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  // create-reward gives these values
  const [reward, setReward] = React.useState("");
  const [moneyAmount, setMoneyAmount] = React.useState("");
  // motive gives this value
  const [motive, setMotive] = React.useState("");

  // Create official challenge object and send to Firebase
  const sendChallengeToFirebase = () => {
    // create random 5 digit number for challenge ID
    const challengeID = Math.floor(Math.random() * 90000) + 10000;
    // actual challenge ID will have user id as prefix
    const actualChallengeID = `${props.userID}-${challengeID}`;
    db.ref("challenges/" + challengeID).set({
      id: actualChallengeID,
      challengeName: challengeName,
      frequency: frequency,
      duration: duration,
      endDate: endDate,
      reward: reward,
      moneyAmount: moneyAmount,
      motive: motive,
    });
  };

  const sendDataToParent = (value, property) => {
    switch (property) {
      case "name":
        setChallengeName(value);
      case "frequency":
        setChallengeFrequency(value);
      case "duration":
        setDuration(value);
      case "endDate":
        setEndDate(value);
      case "index":
        setIndex(value);
    }
  };

  const leftClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(0);
    }
  };

  const rightClick = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  // Stores the different pages inside the create challenge flow. Renders appropriate page
  // based on index from user's click
  const routes = {
    0: <SetUpGoalPage sendDataToParent={sendDataToParent} index={index} />,
    1: <CreateRewardPage sendDataToParent={sendDataToParent} />,
    2: <MotivePage sendDataToParent={sendDataToParent} />,
    3: <ConfirmGoalPage />,
    4: <PaymentDetailsPage />,
    // 5: <DepositAnimationPage />,
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
