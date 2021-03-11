import React, { useEffect } from 'react'
import ChallengeBlock from '../components/challengeBlock';
import styled from "styled-components";
import Layout from '../components/layout'
import { db } from '../config';
import { Link } from 'react-router-dom';

export const ChallengesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     
    a {
        width: 50%;
        text-decoration: none;
    }
`


const HomePage = ({ onMapUpdate, user }) => {
    const [challenges, setChallenges] = React.useState({});

    useEffect(() => {
        db.ref('challenges/').orderByChild('userID').equalTo(user.id).on('value', snapshot => {
            const challenges = snapshot.val();
            setChallenges(challenges);
            console.log(challenges);
        });
    }, []);

    return (
        <Layout>
            <div>
                Home
        </div>
            <ChallengesContainer>
                {Object.keys(challenges).map((keyName, i) => (
                    <Link to={{ pathname: "/map" }} onClick={() => onMapUpdate(challenges[keyName].id)}>
                        <ChallengeBlock key={i} challenge={challenges[keyName]} />
                    </Link>
                ))}
            </ChallengesContainer>
        </Layout>
    )
}

export default HomePage