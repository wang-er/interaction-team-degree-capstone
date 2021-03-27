import React, { useEffect } from "react";
import ChallengeBlock from "../components/challengeBlock";
import styled from "styled-components";
import Layout from "../components/layout";
import { db } from "../config";
import { Link } from "react-router-dom";
import { Button, SmallButton } from "../components/base/buttons";
import { Body, BodyBold, BodyTitle, H1 } from "../components/base/fonts";

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

const HomePage = ({ onMapUpdate, user, userID }) => {
  const [challenges, setChallenges] = React.useState({});
  const [currentChallenges, setCurrentChallenges] = React.useState([]);
  const [pastChallenges, setPastChallenges] = React.useState([]);

  const [emptyHistory, setEmptyHistory] = React.useState(true);

  useEffect(() => {
    db.ref("challenges/")
      .orderByChild("userID")
      .equalTo(userID)
      .on("value", (snapshot) => {
        var dbChallenges = snapshot.val();
        if (dbChallenges !== undefined && dbChallenges !== null) {
          setChallenges(dbChallenges);
          sortChallenges(dbChallenges);
        } else {
          setChallenges({});
        }
      });
  }, []);

  const sortChallenges = (challenges) => {
    const newChallengesList = [];
    const oldChallengesList = [];
    if (challenges !== null || challenges !== undefined || challenges !== {}) {
      const challengesKeys = Object.keys(challenges);

      for (var key in challengesKeys) {
        if (challenges[challengesKeys[key]].isArchived !== true) {
          newChallengesList.push(challenges[challengesKeys[key]]);
        } else {
          oldChallengesList.push(challenges[challengesKeys[key]]);
        }
      }
    }
    setCurrentChallenges(newChallengesList);
    setPastChallenges(oldChallengesList);
  };

  const renderCurrentContent = () => {
    return currentChallenges.map((challenge, i) => (
      <Link to={{ pathname: "/map" }} onClick={() => onMapUpdate(challenge.id)}>
        <ChallengeBlock key={challenge.id} challenge={challenge} />
      </Link>
    ));
  };

  const renderArchivedContent = () => {
    return pastChallenges.map((challenge, i) => (
      <Link to={{ pathname: "/map" }} onClick={() => onMapUpdate(challenge.id)}>
        <ChallengeBlock key={challenge.id} challenge={challenge} />
      </Link>
    ));
  };

  return (
    <Layout location="home">
      <Button>Omg hurrah</Button>
      <HeaderContainer>
        <H1>Goals</H1>
      </HeaderContainer>
      <TitleContainer>
        <BodyTitle> Current Goals</BodyTitle>
        <Link to={{ pathname: "/create-challenge" }}>
          <SmallButton>+ Create </SmallButton>
        </Link>
      </TitleContainer>
      {currentChallenges.length !== 0 ? (
        <ChallengesContainer>{renderCurrentContent()}</ChallengesContainer>
      ) : (
        <BodyBold color="#828282">
          You don’t have any goals, tap “Create” to make one!
        </BodyBold>
      )}
      {pastChallenges.length !== 0 && (
        <TitleContainer>
          <BodyTitle> Past Goals </BodyTitle>
        </TitleContainer>
      )}
      <ChallengesContainer>{renderArchivedContent()}</ChallengesContainer>
    </Layout>
  );
};

export default HomePage;
