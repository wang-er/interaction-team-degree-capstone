import React, { useEffect } from "react";
import ChallengeBlock from "../components/challengeBlock";
import styled from "styled-components";
import Layout from "../components/layout";
import { db } from "../config";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const ChallengesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  a {
    width: 50%;
    text-decoration: none;
  }
`;

const HomePage = ({ onMapUpdate, user, userID }) => {
  const [challenges, setChallenges] = React.useState({});

  useEffect(() => {
    db.ref("challenges/")
      .orderByChild("userID")
      .equalTo(userID)
      .on("value", (snapshot) => {
        var dbChallenges = snapshot.val();
        if (dbChallenges !== undefined && dbChallenges !== null) {
          setChallenges(dbChallenges);
        } else {
          setChallenges({});
        }
      });
  }, []);

  const renderContent = () => {
    console.log(userID);
    console.log(challenges);
    if (challenges !== null || challenges !== undefined || challenges !== {}) {
      return Object.keys(challenges).map((keyName, i) => (
        <Link
          to={{ pathname: "/map" }}
          onClick={() => onMapUpdate(challenges[keyName].id)}
        >
          <ChallengeBlock key={i} challenge={challenges[keyName]} />
        </Link>
      ));
    }
  };

  return (
    <Layout>
      <div>
        Home
        <Link to={{ pathname: "/create-challenge" }}>
          <Button id="create-challenge-button" size="sm"></Button>
        </Link>
      </div>
      <ChallengesContainer>{renderContent()}</ChallengesContainer>
    </Layout>
  );
};

export default HomePage;
