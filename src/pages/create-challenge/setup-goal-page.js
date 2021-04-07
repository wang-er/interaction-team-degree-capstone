import React, { useEffect, useState } from "react";
import Picture from "../../components/gallery";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LayoutDiv } from "../../components/layout";
import { H3, Body } from "../../components/base/fonts";
import { LoginButton, HyperLink, Button } from "../../components/base/buttons";
import { Input } from "../../components/base/forms";
import { CloseButton } from "@chakra-ui/react";

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

export const ButtonsContainer = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

const SetUpGoalPage = (props) => {
  const [challengeName, setChallengeName] = React.useState("");
  const [frequency, setChallengeFrequency] = React.useState("");
  const [duration, setDuration] = React.useState("week");
  const [endDate, setEndDate] = React.useState(new Date());
  const currDate = new Date();

  let handleValues = () => {
    props.sendDataToParent(challengeName, "name");
    props.sendDataToParent(frequency, "frequency");
    props.sendDataToParent(duration, "duration");
    props.sendDataToParent(endDate, "endDate");
    console.log(calculateTotalDays());
    props.sendDataToParent(calculateTotalDays(), "totalDays");
    props.sendDataToParent(1, "index");
  };

  // calculate the total number of days for number of nodes on map rendering given user inputs
  const calculateTotalDays = () => {
    // setTimeout(function () {
    // let daysDiff = endDate.diff(currDate, "days");
    let timeDiff = endDate.getTime() - currDate.getTime();
    let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    console.log(`difference is ${daysDiff}`);
    console.log(`freq is: ${frequency}`);
    console.log(`dur is: ${duration}`);
    switch (duration) {
      case "day":
        console.log("Day hit");
        // setTotalDays(props.frequency * daysDiff);
        return frequency * daysDiff;
      case "week":
        console.log("week hit");
        // setTotalDays(Math.floor(daysDiff / 7) * props.frequency);
        return Math.floor(daysDiff / 7) * frequency;
      case "month":
        // setTotalDays(Math.floor(daysDiff / 30) * props.frequency);
        return Math.floor(daysDiff / 30) * frequency;
      default:
        console.log("calculate total days default");
    }
  };

  return (
    <NewChallengeLayout type="plain">
      <CloseButton
        class="close-button"
        size="md"
        paddingLeft="350px"
        onClick={() => alert("implement")}
      />

      <H3 class="create-challenge-title">Let’s set up a goal.</H3>
      <Body>Swipe through some ideas if you can’t think of anything.</Body>
      <Picture />
      <form>
        <Body>
          I want to{" "}
          <Input
            type="text"
            name="challenge-name"
            onChange={(e) => setChallengeName(e.target.value)}
          />{" "}
          {"\n"}
          {"\n"}
          <Input
            type="text"
            size="8"
            name="challenge-frequency"
            onChange={(e) => setChallengeFrequency(e.target.value)}
          />{" "}
          times a{" "}
          <select
            style={{ border: "1px solid #B5B5B5" }}
            id="frequency-options"
            name="frequency-options"
            onChange={(d) => setDuration(d.target.value)}
          >
            <option>day</option>
            <option selected="selected">week</option>
            <option>month</option>
          </select>
          {"\n"}
          {"\n"}
          My ideal end date is: {"\n"}
          {"\n"}
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </Body>
      </form>
      <ButtonsContainer>
        <CarouselButton
          type="primary"
          onClick={handleValues}
          isFilled
          key="button2"
        >
          Next
        </CarouselButton>
      </ButtonsContainer>
    </NewChallengeLayout>
  );
};

export default SetUpGoalPage;
