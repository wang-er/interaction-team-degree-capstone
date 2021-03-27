import React, { useEffect, useState } from "react";
import Picture from "../../components/gallery";
import styled from "styled-components";

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

const SetUpGoalPage = (props) => {
  const [challengeName, setChallengeName] = React.useState("");
  const [frequency, setChallengeFrequency] = React.useState("");
  const [duration, setDuration] = React.useState("week");
  const [endDate, setEndDate] = React.useState("");

  useEffect(() => {
    // Update the document title using the browser API
  });

  let handleInputChange = (property) => {
    return (e) => {
      let inputValue = e.target.value;
      switch (property) {
        case "name":
          setChallengeName(inputValue);
        case "frequency":
          setChallengeFrequency(inputValue);
        case "duration":
          console.log(inputValue);
          setDuration(inputValue);
        case "endDate":
          setEndDate(inputValue);
        default:
          console.log("unknown type");
      }
    };
  };

  let handleValues = () => {
    props.sendDataToParent(challengeName, "name");
    props.sendDataToParent(frequency, "frequency");
    props.sendDataToParent(duration, "duration");
    props.sendDataToParent(endDate, "endDate");
    props.sendDataToParent(1, "index");
  };

  return (
    <>
      <h1 class="create-challenge-title">Let’s set up a goal.</h1>
      <p class="create-challenge-text">
        Swipe through some ideas if you can’t think of anything.
      </p>
      <Picture />
      <form>
        <p>
          I want to{" "}
          <input
            type="text"
            name="challenge-name"
            onChange={handleInputChange("name")}
          />{" "}
          {"\n"}
          {"\n"}
          <input
            type="text"
            size="8"
            name="challenge-frequency"
            onChange={handleInputChange("frequency")}
          />{" "}
          times a{" "}
          <select
            id="frequency-options"
            name="frequency-options"
            onChange={handleInputChange("duration")}
          >
            <option>day</option>
            <option selected="selected">week</option>
            <option>month</option>
            <option>year</option>
          </select>
          {"\n"}
          {"\n"}
          My ideal end date is: {"\n"}
          {"\n"}
          <input
            type="text"
            size="16"
            placeholder="MM/DD/YYYY"
            name="date"
            onChange={handleInputChange("endDate")}
          />
        </p>
      </form>
      <CarouselButton onClick={handleValues} isFilled key="button2">
        Next
      </CarouselButton>
    </>
  );
};

export default SetUpGoalPage;
