import React from "react";
import styled from "styled-components";
import { db } from "../config";
import { Link, useHistory } from 'react-router-dom';
import PiggyImage from '../icons/Piggy.png'
import PiggyCompleted from '../icons/PiggyCompleted.svg'




export const NodeContainer = styled.div`
  margin: 20px;
  width: 90px;
  height: 90px;
  position: relative;
}
`;

export const ButtonCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white;
  box-sizing: border-box;
  box-shadow: 0 2px 6px #3508083A;
  // background-image: url(${PiggyImage});
  background: ${props => (props.isCompleted ? `linear-gradient(#513574 -10%, #272D68 110%)` : "#EFEFEF")}; 
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonImage = styled.img`
  width: 50px;
`;


export const ButtonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #3a4e82cc;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  transition: 0.2s all;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  color: white;
  font-size: 50px;
`;

export const ModalImg = styled.img`
  width: 30%;
`;


const PiggyBankNode = ({ data, id }) => {
    const history = useHistory();

    const completeChallenge = (event) => {
        event.preventDefault();
        if (data.currentDay == data.totalDays) { //&& !data.isArchived
            console.log("you won!");
            var query = db.ref('challenges/').orderByChild('id').equalTo(id);
            query.once("child_added", function (snapshot) {
                snapshot.ref.update({ isArchived: true })
              });
            history.push('/piggy-completion', { data: data })
            }
            
    }

    return (
        <NodeContainer onClick={completeChallenge}>
            <ButtonCircle isCompleted={data.currentDay == data.totalDays}>
              <ButtonImage src={(data.currentDay == data.totalDays) ? PiggyCompleted : PiggyImage}/>
            </ButtonCircle>
        </NodeContainer>
    );
};

export default PiggyBankNode;
