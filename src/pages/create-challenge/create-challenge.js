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
  const random = Math.floor(Math.random() * 90000) + 10000;
  const userID = props.userID;
  const challengeID = `${userID}-${random}`;
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
  // newly created challenge will start at 0
  const currentDay = 0;
  const [totalDays, setTotalDays] = React.useState("");

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
      case "totalDays":
        console.log(`totaldays gets set to ${value}`);
        setTotalDays(value);
      case "reward":
        setReward(value);
      case "moneyAmount":
        setMoneyAmount(value);
      case "motive":
        setMotive(value);
      case "index":
        console.log(`index gets set to ${value}`);
        setIndex(value);
      default:
        console.log("unknown type");
    }
  };

  // Stores the different pages inside the create challenge flow. Renders appropriate page
  // based on index from user's click
  const routes = {
    0: <SetUpGoalPage sendDataToParent={sendDataToParent} index={index} />,
    1: <CreateRewardPage sendDataToParent={sendDataToParent} index={index} />,
    2: <MotivePage sendDataToParent={sendDataToParent} index={index} />,
    3: (
      <ConfirmGoalPage
        sendDataToParent={sendDataToParent}
        index={index}
        challengeName={challengeName}
        frequency={frequency}
        duration={duration}
        endDate={endDate}
        reward={reward}
        moneyAmount={moneyAmount}
        motive={motive}
        challengeID={challengeID}
        userID={userID}
        currentDay={currentDay}
        totalDays={totalDays}
      />
    ),
    4: <PaymentDetailsPage sendDataToParent={sendDataToParent} index={index} />,
    // 5: <DepositAnimationPage />,
  };

  return (
    <CreateChallengeLayout>
      {console.log(`userID ${userID} and challengeID ${challengeID}`)}
      {routes[index]}
    </CreateChallengeLayout>
  );
};

export default CreateChallengePage;
