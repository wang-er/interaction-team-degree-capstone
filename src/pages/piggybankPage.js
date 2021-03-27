import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from "styled-components";

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
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    padding: 0px 35px;
    height: 60vh;
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
            content: "",
            imageURL: "https://cdn.discordapp.com/emojis/563971267720642581.png"
        },
        {
            content: "",
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

    // const data = this.props.history.location.state?.data

    return <BoardingLayout>
                <SlideBox id="1" isOpen={isOpen(1)}>
                    {carouselSlidesData[0].content}
                    <DemoImage src={carouselSlidesData[0].imageURL} onClick={rightClick} />
                </SlideBox>
                <SlideBox id="2" isOpen={isOpen(2)}>
                    {carouselSlidesData[1].content}
                    <DemoImage src={carouselSlidesData[1].imageURL} onClick={rightClick} />
                </SlideBox>
                <SlideBox id="3" isOpen={isOpen(3)}>
                    {carouselSlidesData[2].content}
                    <DemoImage src={carouselSlidesData[2].imageURL} onClick={rightClick} />
                </SlideBox>
                <SlideBox id="4" isOpen={isOpen(4)}>
                    <div>Congrats! You’ve successfully completed your goal. Go ahead and treat yourself with your reward:</div>
                    <div>{data.title}</div>
                    <CarouselButton isFilled onClick={rightClick}>
                        Claim Reward
                    </CarouselButton>
                </SlideBox>
                <SlideBox id="5" isOpen={isOpen(5)}>
                    <div>What's next?</div>
                    <div>You can still view this goal under Past Goals.</div>

                    <div>Watch recap of your goal:</div>
                    <div>Start new goal:</div>
                    <CarouselButton isFilled>
                        <Link to={{ pathname: "/home" }}>
                            Head home
                        </Link>
                    </CarouselButton>
                </SlideBox>
    </BoardingLayout>
}


export default PiggyBankPage

