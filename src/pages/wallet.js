import React, { useEffect } from "react";
import ChallengeBlock from "../components/challengeBlock";
import styled from "styled-components";
import Layout from "../components/layout";
import { db } from "../config";
import { Link } from "react-router-dom";
import { Button, LoginButton, SmallButton } from "../components/base/buttons";
import { Body, BodyBold, BodySmall, BodyTitle, H1 } from "../components/base/fonts";
import { Input } from "../components/base/forms";
import EditIcon from '../icons/Edit2.svg'
import CardIcon from '../icons/Card.svg'



export const HeaderContainer = styled.div`
  padding-top: 80px;
`;

export const ChallengesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  a {
    width: 100%;
    text-decoration: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  margin-top: 30px;
`;

export const CurrentBalanceDiv = styled.div`
    margin-top: 30px;


`

export const CurrentBalanceTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const CurrentBalanceLine = styled.hr`
    border-top: 2px dotted #CCC3D7;
    margin: 10px 0px;
`

export const TotalMoneyDiv = styled.div`
  font-weight: 700;
  font-size: 18px;

`

export const PaymentMethodsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: space-between;
    min-height: 18vh;
`

export const LinkedButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const LinkedAccountsDiv = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

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
`

export const LinkedAccountsButton = styled(LoginButton)`
`


export const PaymentButton = styled(Button)`
    width: fit-content;
`

export const PaymentInput = styled.div`
    position: relative;
    input {
        width: 100%;
        padding-left: 50px;
        padding-right: 50px;
    }
`

export const CreditImg = styled.img`
    position: absolute;
    top: 13px;
    left: 10px;
`

export const EditImg = styled.img`
    position: absolute;
    top: 13px;
    right: 15px;
`



const WalletPage = () => {
    const [challenges, setChallenges] = React.useState({});
    const [currentChallenges, setCurrentChallenges] = React.useState([]);
    const [pastChallenges, setPastChallenges] = React.useState([]);

    const [emptyHistory, setEmptyHistory] = React.useState(true);

    //   useEffect(() => {
    //     db.ref("challenges/")
    //       .orderByChild("userID")
    //       .equalTo(userID)
    //       .on("value", (snapshot) => {
    //         var dbChallenges = snapshot.val();
    //         if (dbChallenges !== undefined && dbChallenges !== null) {
    //           setChallenges(dbChallenges);
    //           sortChallenges(dbChallenges);
    //         } else {
    //           setChallenges({});
    //         }
    //       });
    //   }, []);
    // 




    return (
        <Layout location="wallet">
            <HeaderContainer>
                <H1>Wallet</H1>
            </HeaderContainer>
            <CurrentBalanceDiv>
                <CurrentBalanceTop>
                    <Body>Current Balance</Body>
                    <TotalMoneyDiv>$80</TotalMoneyDiv>
                </CurrentBalanceTop>
                <CurrentBalanceLine/>
                <BodySmall>
                    This is your money from past incompleted goals. You can use this money as a reward for future goals.
            </BodySmall>
            </CurrentBalanceDiv>
            <PaymentMethodsDiv>
                <BodyTitle>Payment Methods</BodyTitle>
                <PaymentInput>
                    <CreditImg src={CardIcon}/>
                    <Input readonly shadowed value="•••• •••• •••• 3182"/>
                    <EditImg src={EditIcon}/>
                </PaymentInput>
                <PaymentButton type="secondary">Add payment methods</PaymentButton>
            </PaymentMethodsDiv>
            <LinkedAccountsDiv>
                <BodyTitle>Linked Accounts</BodyTitle>
                <LinkedButtonsDiv>
                    <LinkedAccountsButton>
                        <img src="https://i1.wp.com/www.deteched.com/wp-content/uploads/2017/07/Venmo-Quarterly-Growth-Slows-Down-as-the-Base-Grows.png?fit=3360%2C1050"/>
                    </LinkedAccountsButton>
                    <LinkedAccountsButton>
                        <img src="https://sm.pcmag.com/pcmag_in/review/p/paypal/paypal_mb8k.png"/>
                    </LinkedAccountsButton>
                </LinkedButtonsDiv>
            </LinkedAccountsDiv>


            {/* {(currentChallenges.length !== 0) ?
                <ChallengesContainer>
                    {renderCurrentContent()}
                </ChallengesContainer> : 
                <BodyBold color="#828282">You don’t have any goals, tap “Create” to make one!</BodyBold> 
            } 
            {(pastChallenges.length !== 0) &&
                <TitleContainer>
                    <BodyTitle> Past Goals </BodyTitle>
                </TitleContainer>}
            <ChallengesContainer>
                {renderArchivedContent()}
            </ChallengesContainer> */}
        </Layout>
    )
}
export default WalletPage;
