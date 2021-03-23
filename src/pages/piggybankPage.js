import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
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
    display: flex;
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



const PiggyBankPage = () => {

    // Images of piggy bank state
    const carouselSlidesData = [
        {
           imageURL: "https://cdn.discordapp.com/emojis/623731761234575370.png"
        },
        {
            imageURL: "https://cdn.discordapp.com/emojis/563971267720642581.png"
        },
        {
            imageURL: "https://cdn.discordapp.com/emojis/487275835967930389.png?v=1"
        }
    ];

    const maxIndex = carouselSlidesData.length - 1;
    const [index, setIndex] = React.useState(0);

    const rightClick = () => {
        if (index < maxIndex) {
            setIndex(index + 1);
        }
    }

    return <BoardingLayout>
        {/* <TransitionGroup>
            <CSSTransition key={index}
                timeout={150}
                classNames="fade"> */}
                <SlideBox>
                    <DemoImage src={carouselSlidesData[index].imageURL} onClick={rightClick} />
                </SlideBox>
            {/* </CSSTransition>
        </TransitionGroup> */}
    </BoardingLayout>
}


export default PiggyBankPage

