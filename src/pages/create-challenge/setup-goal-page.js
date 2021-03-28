import React, { useEffect, useState } from "react";
import Picture from "../../components/gallery";
import styled from "styled-components";
import { Button } from "../../components/base/buttons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const CarouselButton = styled(Button)`
  margin: 10px 10px;
`;

const SetUpGoalPage = (props) => {
  const [challengeName, setChallengeName] = React.useState("");
  const [frequency, setChallengeFrequency] = React.useState("");
  const [duration, setDuration] = React.useState("week");
  const [endDate, setEndDate] = React.useState(new Date());
  const currDate = new Date();
  const [totalDays, setTotalDays] = React.useState(0);

  // useEffect(() => {
  //   calculateTotalDays();
  //   // getResult();
  // }, []);

  let handleInputChange = (property) => {
    return (e) => {
      let inputValue = e.target.value;
      switch (property) {
        case "name":
          setChallengeName(inputValue);
        case "frequency":
          setChallengeFrequency(inputValue);
        // case "duration":
        //   console.log(inputValue);
        //   setDuration(inputValue);
        // case "endDate":
        //   setEndDate(inputValue);
        default:
          console.log("unknown type");
      }
    };
  };

  // const wrapper = () => {
  //   await calculateTotalDays();
  //   handleValues();
  // };

  let handleValues = () => {
    props.sendDataToParent(challengeName, "name");
    props.sendDataToParent(frequency, "frequency");
    props.sendDataToParent(duration, "duration");
    props.sendDataToParent(endDate, "endDate");
    props.sendDataToParent(totalDays, "totalDays");
    props.sendDataToParent(1, "index");
  };

  // calculate the total number of days for number of nodes on map rendering given user inputs
  const calculateTotalDays = (callback) => {
    setTimeout(function () {
      // let daysDiff = endDate.diff(currDate, "days");
      let timeDiff = endDate.getTime() - currDate.getTime();
      let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

      console.log(`difference is ${daysDiff}`);
      switch (props.duration) {
        case "day":
          setTotalDays(props.frequency * daysDiff);
        case "week":
          setTotalDays(Math.floor(daysDiff / 7) * props.frequency);
        case "month":
          setTotalDays(Math.floor(daysDiff / 30) * props.frequency);
        default:
          console.log("calculate total days default");
      }
      // callback();
      console.log(`totalDays is ${totalDays}`);
    }, 3000);
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
            onChange={(d) => setDuration(d)}
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
            // selected={this.state.endDate}
            onChange={(date) => setEndDate(date)}
            // onChange={handleInputChange("endDate")}
          />
        </p>
      </form>
      <CarouselButton
        type="primary"
        onClick={calculateTotalDays(handleValues)}
        isFilled
        key="button2"
      >
        Next
      </CarouselButton>
    </>
  );
};

export default SetUpGoalPage;
