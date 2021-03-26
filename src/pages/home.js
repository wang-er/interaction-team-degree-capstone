import React, { useEffect } from 'react'
import ChallengeBlock from '../components/challengeBlock';
import styled from "styled-components";
import Layout from '../components/layout'
import { db } from '../config';
import { Link } from 'react-router-dom';
import { Button, HyperLink, SmallButton, LoginButton } from '../components/base/buttons';
import { Input, Select, Label } from '../components/base/forms';

export const ChallengesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     
    a {
        width: 50%;
        text-decoration: none;
    }
`

const HomePage = ({ onMapUpdate, user, userID }) => {
    const [challenges, setChallenges] = React.useState({});

    useEffect(() => {
        db.ref('challenges/').orderByChild('userID').equalTo(userID).on('value', snapshot => {
            var dbChallenges = snapshot.val()
            if (dbChallenges !== undefined && dbChallenges !== null) {
            setChallenges(dbChallenges);
        } else {
            setChallenges({});
        }
        });
    }, []);

    const renderCurrentContent = () => {
        if (challenges !== null || challenges !== undefined || challenges !== {}) {
          return Object.keys(challenges).map((keyName, i) => (
            (challenges[keyName].isArchived !== true) ? 
            <Link to={{ pathname: "/map" }} onClick={() => onMapUpdate(challenges[keyName].id)}>
                <ChallengeBlock key={i} challenge={challenges[keyName]} />
            </Link>
            :
            <></>
        ))
        } 
      }

      const renderArchivedContent = () => {
        if (challenges !== null || challenges !== undefined || challenges !== {}) {
          return Object.keys(challenges).map((keyName, i) => (
            (challenges[keyName].isArchived === true) ? 
            <Link to={{ pathname: "/map" }} onClick={() => onMapUpdate(challenges[keyName].id)}>
                <ChallengeBlock key={i} challenge={challenges[keyName]} />
            </Link>
            :
            <></>
        ))
        } 
      }

    return (
        <Layout location="home">
            <div>
                Goals
            </div>
            <Button type="danger">Hello</Button>
            <SmallButton>huh</SmallButton>
            <LoginButton>
                <img src="https://ai.devoteam.com/wp-content/uploads/sites/91/2018/05/google-logo-icon-png-transparent-background.png"/>
                <div>Continue with Google</div>
                </LoginButton>
            <HyperLink type="danger" to="/login">noooo</HyperLink>
            <Label>
                <Input shadowed type="checkbox" placeholder="XXX-XXX-XXXX"/>
                Hello
            </Label>
            
            
            <Select id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </Select>
        <div>
                Current Goals
        </div>
            <ChallengesContainer>
                {renderCurrentContent()}
            </ChallengesContainer>
            <div>
                Past Goals
        </div>
        <ChallengesContainer>
                {renderArchivedContent()}
            </ChallengesContainer>
        </Layout>
    )
}

export default HomePage