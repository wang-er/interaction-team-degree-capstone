import React from "react";
import styled from "styled-components";
import { db } from "../config";
import { Link, useHistory } from 'react-router-dom';



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
  box-shadow: 0 3px 4px grey;
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
    const [isOpen, setIsOpen] = React.useState(false);
    const history = useHistory();

    const completeChallenge = (event) => {
        event.preventDefault();
        if (data.currentDay == data.totalDays) { //&& !data.isArchived
            console.log("you won!");
            var query = db.ref('challenges/').orderByChild('id').equalTo(id);
            query.once("child_added", function (snapshot) {
                snapshot.ref.update({ isArchived: true })
              });
            history.push("/piggy-completion");
            }
            
    }

    return (
        <NodeContainer onClick={completeChallenge}>
            <ButtonCircle>
            </ButtonCircle>
        </NodeContainer>
    );
};

export default PiggyBankNode;
