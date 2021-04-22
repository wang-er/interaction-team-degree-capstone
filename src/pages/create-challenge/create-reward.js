import React, { useState, useEffect } from "react";
import Picture from "../../components/gallery";
import styled from "styled-components";
import { Button, HyperLink } from "../../components/base/buttons";
import { ButtonsContainer } from "../onboarding/onboarding";
import { LayoutDiv } from "../../components/layout";
import { H3, Body, ModalTitleBold } from "../../components/base/fonts";
import { Input } from "../../components/base/forms";
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
`;

export const NewChallengeLayout = styled(LayoutDiv)`
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  justify-content: center;
`;

export const ButtonsContainer1 = styled(ButtonsContainer)`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

const CreateRewardPage = (props) => {
  const [reward, setReward] = React.useState("");
  const [moneyAmount, setMoneyAmount] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  let handleInputChange = (property) => {
    return (e) => {
      let inputValue = e.target.value;
      switch (property) {
        case "reward":
          setReward(inputValue);
        case "moneyAmount":
          setMoneyAmount(inputValue);
        default:
          console.log("unknown type");
      }
    };
  };

  let handleValues = () => {
    props.sendDataToParent(reward, "reward");
    props.sendDataToParent(moneyAmount, "moneyAmount");
    props.sendDataToParent(2, "index");
  };

  let handleBackButton = () => {
    props.sendDataToParent(0, "index");
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
      <NewChallengeLayout type="plain" style={{ width: "100vw" }}>
        <div style={{ position: "absolute", top: "10px", right: "20px" }}>
          <CloseButton
            class="close-button"
            size="lg"
            paddingLeft="350px"
            paddingRight="15px"
            onClick={onOpen}
          />
        </div>
        <H3>Let’s motivate you with a reward.</H3>
        <br></br>
        <Body style={{ marginBotom: "15px" }}>
          Specify a reward and how much money you will spend on it. You can also
          input $0 for a non-monetary reward.
        </Body>
        <Picture isGoal={false} />
        <form>
          <Body>
            I will{" "}
            <Input
              type="text"
              name="reward-name"
              onChange={handleInputChange("reward")}
            />{" "}
            {"\n"}
            {"\n"}
            with $
            <Input
              type="text"
              size="8"
              name="money-amount"
              onChange={handleInputChange("moneyAmount")}
            />
            {"\n"}
          </Body>
        </form>
        <ButtonsContainer1>
          <CarouselButton
            key="button1"
            type="secondary"
            onClick={handleBackButton}
          >
            Back
          </CarouselButton>
          <CarouselButton type="primary" key="button2" onClick={handleValues}>
            Next
          </CarouselButton>
        </ButtonsContainer1>
      </NewChallengeLayout>
    </>
  );
};

export default CreateRewardPage;
