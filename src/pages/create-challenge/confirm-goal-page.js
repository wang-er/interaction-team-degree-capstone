import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../config";
import { Button } from "../../components/base/buttons";
import { ButtonsContainer } from "../onboarding/onboarding";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from "moment";
import { H3, H4, Body } from "../../components/base/fonts";
import { CloseButton } from "@chakra-ui/react";
import { LayoutDiv } from "../../components/layout";
import { darkPurple } from "../../components/base/colors";
import { Link } from "react-router-dom";
import EditIcon from "../../icons/Edit.svg";

export const CarouselButton = styled(Button)`
  margin: 10px 10px;
`;

export const NewChallengeLayout = styled(LayoutDiv)`
  z-index: 10000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  justify-content: center;
`;

export const ButtonsContainer1 = styled(ButtonsContainer)`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ConfirmGoalPage = (props) => {
  let handleValues = () => {
    props.sendDataToParent(4, "index");
  };

  let handleBackButton = () => {
    props.sendDataToParent(2, "index");
  };

  // Create official challenge object and send to Firebase
  const sendChallengeToFirebase = () => {
    if (props.challengeName) {
      db.ref("challenges/" + props.challengeID).set({
        id: props.challengeID,
        userID: props.userID,
        title: props.challengeName,
        reward: props.reward,
        moneyAmount: props.moneyAmount,
        motive: props.motive,
        currentDay: props.currentDay,
        totalDays: props.totalDays,
      });
    } else {
      return;
    }
  };

  const wrapper = () => {
    sendChallengeToFirebase();
    handleValues();
  };

  return (
    <NewChallengeLayout type="plain">
      <div style={{ position: "absolute", top: "10px", right: "20px" }}>
        <Link to={{ pathname: "/home" }}>
          <CloseButton
            class="close-button"
            size="lg"
            paddingLeft="350px"
            paddingRight="15px"
          />
        </Link>
      </div>
      <H3 style={{ alignSelf: "normal" }}>Confirm your goal.</H3>
      <br></br>
      <Body>
        Make sure all your info is correct, then you can set up your payment
        method and deposit your money into your piggybank.
      </Body>
      <br></br>
      <br></br>
      <div id="goal-conf" style={{ alignSelf: "flex-start" }}>
        <div style={{ display: "flex" }}>
          <H4 color={darkPurple} style={{ paddingRight: "10px" }}>
            Your Goal{" "}
          </H4>
          <img src={EditIcon} />
        </div>
        <br></br>
        <Body>
          I want to {props.challengeName} <br></br>
          {"\n"} {props.frequency} times a {props.duration} by {""}
          {moment(props.endDate).format("MM/DD/YYYY")}
        </Body>
        <br></br>
        <br></br>
        <div style={{ display: "flex" }}>
          <H4 color={darkPurple} style={{ paddingRight: "10px" }}>
            Your Reward{" "}
          </H4>
          <img src={EditIcon} />
        </div>
        <br></br>
        <Body>
          I will {props.reward} <br></br>
          {"\n"} with ${props.moneyAmount}{" "}
        </Body>
      </div>
      <ButtonsContainer1 key="carousel">
        <CarouselButton
          type="secondary"
          key="button1"
          onClick={handleBackButton}
        >
          Back
        </CarouselButton>
        <CarouselButton type="primary" key="button2" onClick={wrapper}>
          Confirm
        </CarouselButton>
      </ButtonsContainer1>
    </NewChallengeLayout>
  );
};

export default ConfirmGoalPage;
