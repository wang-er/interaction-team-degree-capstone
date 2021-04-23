import React, { useState } from "react";
import styled from "styled-components";
import { Button, HyperLink, LoginButton } from "../../components/base/buttons";
import { ButtonsContainer } from "../onboarding/onboarding";
import { LayoutDiv } from "../../components/layout";
import {
  H3,
  Body,
  BodySmall,
  ModalTitleBold,
} from "../../components/base/fonts";
import {
  CloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Input } from "../../components/base/forms";
import SelectedCard from "../../icons/Selected.png";
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

export const CurrentBalanceDiv = styled.div`
  margin-top: 30px;
  flex-direction: row;
  display: flex;
  align-self: flex-start;
`;

export const CurrentBalanceTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CurrentBalanceLine = styled.hr`
  border-top: 2px bold #ccc3d7;
  // margin: 10px 0px;
`;

export const TotalMoneyDiv = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const PaymentMethodsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: space-between;
  min-height: 18vh;
`;

export const LinkedButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LinkedAccountsDiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  button {
    margin: 0px;
    margin-right: 10px;
    margin-top: 10px;

    width: 102px;
    height: 56px;

    img {
      width: auto;
      height: auto;
    }
  }
`;

export const LinkedAccountsButton = styled(LoginButton)``;

export const LinkedCardButton = styled.button`
  font-weight: 500;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  margin: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }
  div {
    width: 100%;
    margin: 0px 15px;
  }
`;

export const PaymentButton = styled(Button)`
  width: fit-content;
`;

export const PaymentInput = styled.div`
  position: relative;
  input {
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const CreditImg = styled.img`
  position: absolute;
  top: 13px;
  left: 10px;
`;

export const EditImg = styled.img`
  position: absolute;
  top: 13px;
  right: 15px;
`;

const PaymentDetailsPage = (props) => {
  console.log(`payment details mapID: ${props.mapID}`);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let handleValues = () => {
    // props.sendDataToParent(4, "index");
  };

  let handleBackButton = () => {
    props.sendDataToParent(3, "index");
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
          height="130px"
          margin="0"
          borderRadius="0"
          style={{
            zIndex: 99,
            alignSelf: "center",
            height: "300px",
            width: "80%",
            borderRadius: "15px",
            display: "inline-table",
          }}
        >
          <div
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              marginTop: "30px",
            }}
          >
            <ModalTitleBold
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Abiding by the honor code?
            </ModalTitleBold>
            <ModalBody
              style={{
                fontFamily: "Work Sans",
                fontSize: "17px",
                textAlign: "center",
              }}
            >
              You can choose to not put down a deposit if you want to handle
              your own money.
            </ModalBody>
          </div>
          <ModalFooter
            justifyContent="center"
            textAlign="center"
            display="grid"
          >
            <Link to={{ pathname: `/deposit-completion/${props.mapID}` }}>
              <Button style={{ marginBottom: "10px" }} type="danger">
                Skip Payment
              </Button>
            </Link>
            <HyperLink onClick={onClose} to={{ pathname: "/create-challenge" }}>
              Cancel
            </HyperLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <NewChallengeLayout type="plain" style={{ width: "100vw" }}>
        <H3 style={{ alignSelf: "end" }}>Payment Details</H3>
        <CurrentBalanceDiv>
          <Body>Deposit Amount</Body>
          <TotalMoneyDiv style={{ marginLeft: "150px" }}>
            {props.moneyAmount ? props.moneyAmount : `$0`}
          </TotalMoneyDiv>
          <CurrentBalanceLine />
        </CurrentBalanceDiv>
        <LinkedAccountsDiv>
          <LinkedCardButton>
            <img src={SelectedCard}></img>
          </LinkedCardButton>
          <LinkedAccountsButton>
            <img src="https://i1.wp.com/www.deteched.com/wp-content/uploads/2017/07/Venmo-Quarterly-Growth-Slows-Down-as-the-Base-Grows.png?fit=3360%2C1050" />
          </LinkedAccountsButton>
          <LinkedAccountsButton>
            <img src="https://sm.pcmag.com/pcmag_in/review/p/paypal/paypal_mb8k.png" />
          </LinkedAccountsButton>
        </LinkedAccountsDiv>
        <PaymentMethodsDiv
          style={{ alignSelf: "normal", marginBottom: "70px" }}
        >
          <Body>Cardholder's Name</Body>
          <PaymentInput>
            <Input readonly shadowed value="Cardholder's Name" />
          </PaymentInput>
          <br></br>
          <Body>Card Number</Body>
          <PaymentInput>
            <Input readonly shadowed value="0000 0000 0000 0000" />
          </PaymentInput>
          <br></br>
          <div style={{ display: "flex" }}>
            <Body>Exp. Date</Body>
            <Body style={{ marginLeft: "40px" }}>CVC</Body>
          </div>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <Input
              style={{ width: "30%", marginRight: "20px" }}
              readonly
              shadowed
              value="MM/YYYY"
            />
            <Input style={{ width: "18%" }} readonly shadowed value="CVC" />
          </div>
          <div style={{ display: "flex" }}>
            <Input
              style={{
                marginRight: "10px",
                appearance: "inherit",
                backgroundColor: "white",
              }}
              shadowed
              type="checkbox"
            />
            <BodySmall style={{ paddingTop: "3px" }}>
              Save Payment Method
            </BodySmall>
          </div>
        </PaymentMethodsDiv>
        <div style={{ display: "contents" }}>
          <Link to={{ pathname: `/deposit-completion/${props.mapID}` }}>
            <CarouselButton isFilled key="button2">
              Confirm Payment
            </CarouselButton>
          </Link>
          <HyperLink
            style={{ positon: "relative" }}
            isFilled="false"
            key="button2"
            onClick={onOpen}
          >
            Skip Payment
          </HyperLink>
        </div>
      </NewChallengeLayout>
    </>
  );
};

export default PaymentDetailsPage;
