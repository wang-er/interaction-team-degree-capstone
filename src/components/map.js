import React, { useEffect, useState } from "react"
import styled from "styled-components"
import MapNode from "./mapNode";

export const MapContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`


//functional components?
const Map = () => {
    const [mapNodeList, setMapNodeList] = React.useState([]);
    const [node, setNode] = useState(1);

    const saveNodes = () => {
        console.log(mapNodeList);
    }


    //send text vals
    const submitValue = () => {
        const dayArray = [];
        for (var i = 0; i < node; i++) {
            dayArray.push(i);
        }
        setMapNodeList(dayArray);
        setNode(1);
        saveNodes();
      }
      
    // const addNode = () => {
    //     const tempArray = Object.assign([], mapNodeList);
    //     tempArray.push("f");
    //     setMapNodeList(tempArray);
    //     saveNodes();
    //   }

    //rendering
    return <>
        <input type="number" value={node} onChange={e => setNode(e.target.value)} />
        <button onClick={submitValue}>Add nodes</button>
        {/* <button onClick={addNode}>Add another node!</button> */}

        <MapContainer>
            {mapNodeList.map((node) => {
                return (
                    <MapNode id={node}/>
                )
            })}
        </MapContainer>
    </>
}

export default Map
