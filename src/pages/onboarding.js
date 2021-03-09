import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from "styled-components";
import FAQPage from './faq';

export const BoardingLayout = styled.div`
    background-color: #E0E0E0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: 10000000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const SlideBox = styled.div`
    display: flex;
    padding: 0px 35px;
    height: 60vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.5s;

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

`

export const NextButton = styled.div`
    font-weight: bold;
    color: white;
    padding: 10px;
    background-color: blue;
    border-radius: 3px;
    margin: 10px;
`

export const FAQButton = styled.div`
    font-weight: bold;
    color: white;
    padding: 10px;
    border: 3px solid blue;
    border-radius: 3px;
    margin: 10px;
`

export const SkipButton = styled.div`
    font-weight: bold;
    padding: 10px;
    margin: 10px;
`

export const SignupButton = styled.div`
    font-weight: bold;
    padding: 10px;
    margin: 10px;
`


export const OnboardingHeader = styled.div`
`

export const OnboardingTextBox = styled.div`
    align-items: center;
    display: flex;
`

export const DemoImage = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
`

export const CarouselArrow = styled.button` 
    border: none;
    background: none;
    &:focus {
        outline: none;
    }
    svg {
        fill: transparent;
        transition: all 0.2s;
    }
    &:hover svg {
        fill: purple;
    }

`

export const CarouselControl = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`


export const CarouselDotList = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

export const CarouselDot = styled.button`
    padding: 15px;
    border: none;
    background: none;
    outline: none;

    &:focus {
        outline: none;
    }

    svg {
        fill:  ${props => (props.isActive ? 'purple' : 'transparent')};
        transition: all 0.2s;
    }

    &:hover svg {
        fill: purple;
    }
`


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


    return <BoardingLayout>
        <TransitionGroup>
            <CSSTransition key={index}
                timeout={150}
                classNames="fade">
                <SlideBox>
                    <OnboardingHeader>{carouselSlidesData[index].title}</OnboardingHeader>
                    <DemoImage src={carouselSlidesData[index].imageURL} />
                    <OnboardingTextBox>
                        {carouselSlidesData[index].content}
                    </OnboardingTextBox>
                </SlideBox>
            </CSSTransition>
        </TransitionGroup>
        <CarouselControl>
            {/* <CarouselArrow onClick={leftClick}> */}
            {/* <ChevronLeftIconSVG />
                 */}
            {/* back */}
            {/* </CarouselArrow> */}
            <CarouselDotList>
                {carouselSlidesData.map((currElement, currIndex) =>
                    <CarouselDot key={currIndex} onClick={() => setIndex(currIndex)} isActive={(currIndex == index)}>
                        {currIndex}
                    </CarouselDot>
                )}
            </CarouselDotList>
        </CarouselControl>
        <ButtonsContainer>
            {(index != maxIndex) &&
                <>
                    <CarouselArrow onClick={rightClick}>
                        forward
                                </CarouselArrow>
                    <Link to={{ pathname: "/create-account" }}>
                        <SignupButton>
                            Skip
                            </SignupButton>
                    </Link>
                </>}
            {(index === maxIndex) &&
                <>
                    <Link to={{ pathname: "/create-account" }}>
                        <SignupButton>
                            Get Started
                            </SignupButton>
                    </Link>
                    <Link to={{ pathname: "/faq" }}>
                        <FAQButton>
                            View FAQ
                            </FAQButton>
                    </Link>
                </>}
        </ButtonsContainer>
    </BoardingLayout>
}


export default OnboardingPage

