import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from "styled-components";
import { Button, HyperLink } from '../../components/base/buttons';
import { Body, H3 } from '../../components/base/fonts';
import { purple, teal } from '../../components/base/colors';

import { LayoutDiv } from '../../components/layout';

export const BoardingLayout = styled(LayoutDiv)`
    z-index: 10000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const SlideBox = styled.div`
    display: flex;
    padding: 0px 35px;
    height: 60vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.5s;
    margin-bottom: 130px;

    // enter from
    &.fade-enter {
    opacity: 0;
    position: fixed;
    transform: translateX(100vw);
    }

    // enter to
    &.fade-enter-active {
    opacity: 1;
    position: fixed;
    transform: translateX(100vw);
    }

    // exit from
    &.fade-exit {
    opacity: 1;
    transform: translateX(-100vw);
    }

    // exit to 
    &.fade-exit-active {
    opacity: 0;
    transform: translateX(-100vw);

    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

`

export const OnboardingTextBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const DemoImage = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
`

export const CarouselDotList = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    // width: min-content;
    // margin: auto;
    margin-bottom: 30px;
`

export const CarouselDot = styled.div`
    height: 6px;
    width: 6px;
    background-color:  ${props => (props.isActive ? purple : '#bbb')};
    transition: all 0.2s;
    border-radius: 50%;
    display: inline-block;
    margin: 0px 5px;
`


export const CarouselControl = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    bottom: 45px;
`

export const SkipButton = styled(HyperLink)`
   margin-top: 20px;
   visibility: ${({ pageNumber, maxIndex }) => handleButtonAppearance("skip", pageNumber, maxIndex)};
`

export const CarouselButton = styled(Button)`
   display: ${({ feature, pageNumber, maxIndex }) => handleButtonAppearance(feature, pageNumber, maxIndex)};
   margin: 10px 10px;
`

export const FAQButton = styled(Button)`
    background: none;
    border: 1px solid ${teal};
    color: ${teal};
    width: max-content;
    margin: auto;
    margin-top: 30px;
`


const handleButtonAppearance = (button, pageNumber, maxIndex) => {
    if(button == "back" && pageNumber == 0) {
        return "none"
    } 
    if (button == "skip" && pageNumber == maxIndex) {
        return "hidden"
    }
}


const OnboardingPage = () => {

    // Data for carousel
    const carouselSlidesData = [
        {
            title: "Welcome to Centiv!",
            content:
                "Feeling unmotivated? Centiv is here to help. Centiv lets you set a goal, document progress, and provide yourself with a reward. Think of Centiv as a motivational piggybank.",
            imageURL: "https://cdn.discordapp.com/emojis/623731761234575370.png"
        },
        {
            title: "Let’s get started: \n Meet Ashley",
            content:
                "Ashley wants to use Centiv to eat better. She challenges herself to cook 30 healthy meals.",
            imageURL: "https://cdn.discordapp.com/emojis/563971267720642581.png"
        },
        {
            title: "Setting a Reward",
            content:
                "To motivate her, she puts $50 into Centiv. She plans on using the money to buy a new pair of shoes as a reward.",
            imageURL: "https://cdn.discordapp.com/emojis/487275835967930389.png?v=1"
        },
        {
            title: "Document Progress",
            content:
                "In order to get back her $50, she needs to document herself cooking 30 healthy meals. She can take pictures, videos, or type an entry once a day. \n \n \n \n Note: Don’t worry, your money will never disappear. You’ll always have a chance to earn it back.",
            imageURL: "https://cdn.discordapp.com/emojis/666864594999836684.png?v=1"
        },
        {
            title: "Goal Complete!",
            content:
                "Ashley documents her last entry and breaks her piggy bank! The money is transferred back to her and she buys new shoes to reward herself.",
            imageURL: "https://cdn.vox-cdn.com/thumbor/_C0nMyVPwJSQ2rESIJD4O5Y1J-c=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315879/npcmeme.jpg"
        }

    ];

    const maxIndex = carouselSlidesData.length - 1;
    const [index, setIndex] = React.useState(0);
    const leftClick = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }

    const rightClick = () => {
        if (index < maxIndex) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    return <BoardingLayout type="plain">
        <TransitionGroup>
            <CSSTransition key={index}
                timeout={150}
                classNames="fade">
                <SlideBox>
                    <DemoImage src={carouselSlidesData[index].imageURL} />
                    <OnboardingTextBox>
                        <H3>{carouselSlidesData[index].title}</H3>
                        <br/>
                        <Body>{carouselSlidesData[index].content}</Body>
                        {(maxIndex === index) &&
                        <FAQButton>
                            View FAQ
                        </FAQButton>}
                    </OnboardingTextBox>
                </SlideBox>
            </CSSTransition>
        </TransitionGroup>
        <CarouselControl>
            <CarouselDotList>
                {carouselSlidesData.map((currElement, currIndex) =>
                    <CarouselDot key={currIndex} isActive={(currIndex == index)} />)}
            </CarouselDotList>
            <ButtonsContainer>
                <CarouselButton type="secondary" onClick={leftClick} feature="back" pageNumber={index} maxIndex={maxIndex}>
                    Back
                </CarouselButton>
                <CarouselButton type="primary" onClick={rightClick}>
                    {(maxIndex === index) ? 
                     <Link to={{ pathname: "/create-account" }}>
                     Get Started
                    </Link> 
                    : 
                    "Next"}
                    
                </CarouselButton>
            </ButtonsContainer>
            <SkipButton to={{ pathname: "/create-account" }} pageNumber={index} maxIndex={maxIndex}> 
                Skip
            </SkipButton>
        </CarouselControl>

        {/* <ButtonsContainer>
            {(index === 0) &&
                <CarouselButtons key="carousel">
                    <CarouselButton isFilled key="button2" onClick={rightClick}>
                        forward
                </CarouselButton>
                    <Link key="button3" to={{ pathname: "/create-account" }}>
                        <SkipButton>
                            Skip
                    </SkipButton>
                    </Link>
                </CarouselButtons>}
            {(index !== maxIndex && index !== 0) &&
                <CarouselButtons key="carousel">
                    <CarouselButton  key="button1" onClick={leftClick}>
                        back
                    </CarouselButton>
                    <CarouselButton isFilled key="button2" onClick={rightClick}>
                        forward
                    </CarouselButton>
                    <Link key="button3" to={{ pathname: "/create-account" }}>
                        <SkipButton>
                            Skip
                        </SkipButton>
                    </Link>
                </CarouselButtons>}
            {(index === maxIndex) &&
                <CarouselButtons key="carousel">
                    <CarouselButton key="button1" onClick={leftClick}>
                        back
                    </CarouselButton>
                    <CarouselButton isFilled key="button2">
                        <Link to={{ pathname: "/create-account" }}>
                            Get Started
                        </Link>
                    </CarouselButton>
                </CarouselButtons>}
        </ButtonsContainer> */}
    </BoardingLayout>
}



export default OnboardingPage

