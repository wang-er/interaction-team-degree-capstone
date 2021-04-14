import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  HyperLink,
  SmallButton,
  LoginButton,
} from "../../components/base/buttons";
import { ButtonsContainer } from "../onboarding/onboarding";
import { LayoutDiv } from "../../components/layout";
import {
  H3,
  Body,
  BodyBold,
  BodySmall,
  BodyTitle,
  H1,
} from "../../components/base/fonts";
import { Input } from "../../components/base/forms";
import EditIcon from "../../icons/Edit2.svg";
import CardIcon from "../../icons/Card.svg";
import SelectedCard from "../../icons/Selected.png";
import { Link } from "react-router-dom";

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
  const [phone, setPhone] = useState("");

  let handleValues = () => {
    // props.sendDataToParent(4, "index");
  };

  let handleBackButton = () => {
    props.sendDataToParent(3, "index");
  };

  return (
    <NewChallengeLayout type="plain" style={{ width: "100vw" }}>
      <H3 style={{ alignSelf: "end" }}>Payment Details</H3>
      <CurrentBalanceDiv>
        <Body>Deposit Amount</Body>
        <TotalMoneyDiv>
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
      <PaymentMethodsDiv>
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
        <div style={{ display: "row" }}>
          <Body>Exp. Date</Body>
          <Input readonly shadowed value="MM/YYYY" />
          <Body>CVC</Body>
          <Input readonly shadowed value="CVC" />
        </div>
        <Input shadowed type="checkbox" placeholder="XXX-XXX-XXXX" />
      </PaymentMethodsDiv>
      <Link to={{ pathname: "/deposit-completion" }}>
        <CarouselButton
          isFilled
          key="button2"
          // onClick={() => alert("open animation here??")}
        >
          Confirm Payment
        </CarouselButton>
      </Link>
      <HyperLink style={{ positon: "relative" }} isFilled="false" key="button2">
        Skip Payment
      </HyperLink>
      {/* </ButtonsContainer1> */}
    </NewChallengeLayout>
  );
};

export default PaymentDetailsPage;
