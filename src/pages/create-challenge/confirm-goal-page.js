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
    db.ref("challenges/" + props.challengeID).set({
      id: props.challengeID,
      userID: props.userID,
      title: props.challengeName,
      // frequency: props.frequency,
      // duration: props.duration,
      // endDate: props.endDate,
      reward: props.reward,
      moneyAmount: props.moneyAmount,
      motive: props.motive,
      currentDay: props.currentDay,
      totalDays: props.totalDays,
    });
  };

  const wrapper = () => {
    sendChallengeToFirebase();
    handleValues();
  };

  return (
    <NewChallengeLayout type="plain">
      <CloseButton
        class="close-button"
        size="md"
        paddingLeft="350px"
        onClick={() => alert("implement")}
      />
      <H3>Confirm your goal.</H3>
      <Body>
        Make sure all your info is correct, then you can set up your payment
        method and deposit your money into your piggybank.
      </Body>
      <H4 color={darkPurple}>Your goal.</H4>
      <Body>
        I want to {props.challengeName} {"\n"} {props.frequency} times a{" "}
        {props.duration} by {""}
        {moment(props.endDate).format("MM/DD/YYYY")}
      </Body>
      <H4 color={darkPurple}>Your reward.</H4>
      <Body>
        I will {props.reward}
        {"\n"} with ${props.moneyAmount}{" "}
      </Body>
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
