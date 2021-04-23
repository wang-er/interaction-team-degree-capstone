import React, { useEffect, useState, useCallback } from "react";
import Picture from "../../components/gallery";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LayoutDiv } from "../../components/layout";
import { H3, Body, ModalTitleBold } from "../../components/base/fonts";
import { HyperLink, Button } from "../../components/base/buttons";
import { Input, Select } from "../../components/base/forms";
import {
  CloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CarouselButton = styled(Button)`
  margin: 10px 10px;
  // margin-bottom: inherit
`;

export const NewChallengeLayout = styled(LayoutDiv)`
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  padding-top: 20px;
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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    let timeDiff = endDate.getTime() - currDate.getTime();
    let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    console.log(`difference is ${daysDiff}`);
    console.log(`freq is: ${frequency}`);
    console.log(`dur is: ${duration}`);
    switch (duration) {
      case "day":
        console.log("Day hit");
        return frequency * daysDiff;
      case "week":
        console.log("week hit");
        return Math.floor(daysDiff / 7) * frequency;
      case "month":
        return Math.floor(daysDiff / 30) * frequency;
      default:
        console.log("calculate total days default");
    }
  };

  return (
    <>
      <Modal
        style={{
          zIndex: 99,
        }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          height="100px"
          margin="0"
          borderRadius="0"
          style={{
            zIndex: 99,
            alignSelf: "center",
            height: "300px",
            width: "80%",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              marginLeft: "30px",
              marginRight: "30px",
              marginTop: "30px",
            }}
          >
            <ModalTitleBold>Are you sure you want to exit?</ModalTitleBold>
            <ModalBody style={{ fontFamily: "Work Sans", fontSize: "17px" }}>
              Goal will not be saved.
            </ModalBody>
          </div>
          <ModalFooter
            justifyContent="center"
            textAlign="center"
            display="grid"
          >
            <Link to={{ pathname: "/home" }}>
              <Button style={{ marginBottom: "10px" }} type="danger">
                Exit
              </Button>
            </Link>
            <HyperLink onClick={onClose} to={{ pathname: "/create-challenge" }}>
              Cancel
            </HyperLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <NewChallengeLayout type="plain">
        <div style={{ position: "absolute", top: "10px", right: "20px" }}>
          <CloseButton
            class="close-button"
            size="lg"
            paddingLeft="350px"
            paddingRight="15px"
            onClick={onOpen}
          />
        </div>
        <div style={{ position: "absolute", top: "10px", right: "20px" }}></div>
        <H3 style={{ marginLeft: "-40px", marginTop: "30px" }}>
          Let’s set up a goal.
        </H3>
        <br></br>
        <Body style={{ marginLeft: "10px", marginRight: "30px" }}>
          Swipe through some ideas if you can’t think of anything.
        </Body>
        <br />
        <Picture isGoal={true} />
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
            <Select
              style={{
                border: "1px solid #B5B5B5",
                backgroundColor: "white",
                fontSize: "medium",
              }}
              id="frequency-options"
              name="frequency-options"
              onChange={(d) => setDuration(d.target.value)}
            >
              <option>day</option>
              <option selected="selected">week</option>
              <option>month</option>
            </Select>
            {"\n"}
            {"\n"}
            My ideal end date is: {"\n"}
            {"\n"}
            <DatePicker
              id="date-picker"
              style={{
                border: "1px solid #B5B5B5",
                height: "40px",
                borderRadius: "5px",
              }}
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
    </>
  );
};

export default SetUpGoalPage;
