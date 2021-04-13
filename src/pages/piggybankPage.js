import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from "styled-components";
import { Button, SmallButton } from '../components/base/buttons';
import { white } from '../components/base/colors';
import { Body, BodySmall, H3 } from '../components/base/fonts';
import { Input } from '../components/base/forms';
import { LayoutDiv } from '../components/layout';
import EditIcon from '../icons/Edit2.svg'
import CardIcon from '../icons/Card.svg'
import BackgroundImage from '../icons/CompletedNode.png'
import BackIcon from '../icons/Back.svg'



export const CompletionLayout = styled(LayoutDiv)`
    background-color: #E0E0E0;
    overflow: hidden;
    z-index: 10000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const SlideBox = styled.div`
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    padding: 0px 35px;
    height: 100vh;
    width: 100vw;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.5s;
    }
`

export const DemoImage = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
`

export const CarouselButton = styled.button` 
    border: none;
    font-weight: bold;
    color: ${props => (props.isFilled ? 'white' : 'blue')};
    padding: 10px;
    background-color: ${props => (props.isFilled ? 'blue' : 'transparent')};
    border: 1px solid blue;
    border-radius: 3px;
    margin: 10px;
    text-decoration: none;

    a {
        text-decoration: none;
        color: ${props => (props.isFilled ? 'white' : 'blue')};
    }
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

export const AwardDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 50px;
`

export const TapMessage = styled(Body)`
    position: absolute;
    margin-top: -220px;
`


export const NodeContainer = styled.div`
  margin-top: 20px;
  width: 48px;
  height: 48px;
  position: relative;
//   left: ${(props) => props.x}px;
//   top: ${(props) => props.y}px;
}
`;

export const ButtonCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border: 5px solid white;
  box-sizing: border-box;
  box-shadow: 0 2px 6px #3508083A;
`;

export const BackButton = styled(Link)`
    position: fixed;
    top: 25px;
    right: 18px;
    width: 25px;
    z-index: 1000;
`




const PiggyBankPage = () => {
    const history = useHistory();
    const data = history.location.state?.data
    // Images of piggy bank state
    const carouselSlidesData = [
        {
            content: "Tap the piggy bank to break it!",
            imageURL: "https://cdn.discordapp.com/emojis/623731761234575370.png"
        },
        {
            content: " ",
            imageURL: "https://cdn.discordapp.com/emojis/563971267720642581.png"
        },
        {
            content: " ",
            imageURL: "https://cdn.discordapp.com/emojis/487275835967930389.png?v=1"
        }
    ];

    // const maxIndex = carouselSlidesData.length - 1;
    const maxIndex = 5 - 1;
    const [index, setIndex] = React.useState(0);
    const rightClick = () => {
        if (index < maxIndex) {
            setIndex(index + 1);
        }
    }
    const isOpen = (indexValue) => {
        return indexValue === index + 1;
    }

    const renderNode = () => {
        return  <NodeContainer>
        <ButtonCircle img={BackgroundImage}>
          {/* {data.state === "current" && (
            <EntryPopupMenu
              challengeID={challengeID}
              entryID={data.id}
            ></EntryPopupMenu>
          )} */}
        </ButtonCircle>
        </NodeContainer>
    }

    // const data = this.props.history.location.state?.data

    return <CompletionLayout type="map">
        <SlideBox id="1" isOpen={isOpen(1)}>
            <TapMessage color={white}>{carouselSlidesData[0].content}</TapMessage>
            <DemoImage src={carouselSlidesData[0].imageURL} onClick={rightClick} />
        </SlideBox>
        <SlideBox id="2" isOpen={isOpen(2)}>
            <DemoImage src={carouselSlidesData[1].imageURL} onClick={rightClick} />
        </SlideBox>
        <SlideBox id="3" isOpen={isOpen(3)}>
            <DemoImage src={carouselSlidesData[2].imageURL} onClick={rightClick} />
        </SlideBox>
        <SlideBox id="4" isOpen={isOpen(4)}>
            {/* <img src="https://cdn.discordapp.com/emojis/623731761234575370.png"/> */}
            <AwardDiv>
                <div style={{marginBottom: "30px", alignSelf: "center"}}>
                    <DemoImage src="https://cdn.discordapp.com/emojis/623731761234575370.png" />
                </div>
                <div>
                    <Body color={white}>Congrats! You’ve successfully completed your goal. Go ahead and treat yourself with your reward:</Body>
                    <br />
                    <Body color={white}>"{data.reward}"</Body>
                </div>
                <br />
                <PaymentInput>
                    <CreditImg src={CardIcon} />
                    <Input readonly shadowed value="•••• •••• •••• 3182" />
                    <EditImg src={EditIcon} />
                </PaymentInput>
                <br />
                <div style={{alignSelf: "center"}}>
                    <Button onClick={rightClick}>
                        Claim Reward
                    </Button>
                </div>

            </AwardDiv>
        </SlideBox>
        <SlideBox id="5" isOpen={isOpen(5)}>
            <div>

            
            <H3 color={white}>What's next?</H3>
            <Body color={white}>You can still view this goal under Past Goals.</Body>
            <br/>
            <BodySmall color={white}>Watch recap of your goal:</BodySmall>
            <div>
                {renderNode()}
            </div>
            <br/>
            <BodySmall color={white}>Start new goal:</BodySmall>
            <br/>

            <SmallButton>
            <Link to={{ pathname: "/create-challenge" }}>
                    + Create
                        </Link>
            </SmallButton>
                  <BackButton to="/home">
                    <img src={BackIcon}/>
                </BackButton>
            </div>
        </SlideBox>
    </CompletionLayout>
}


export default PiggyBankPage

