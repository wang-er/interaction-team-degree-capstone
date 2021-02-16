import React, { useEffect, useState } from "react"
import styled from "styled-components"
import MapNode from "./mapNode";

export const MapContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
`


//functional components?
const Map = () => {
    const [mapNodeList, setMapNodeList] = React.useState([]);
    const [node, setNode] = useState(1);

    //send text vals
    const submitValue = () => {
        const dayArray = [];
        for (var i = 0; i < node; i++) {
            dayArray.push(i);
        }
        setMapNodeList(dayArray);
        setNode(1)
      }
    

    //rendering
    return <>
        <input type="number" value={node} onChange={e => setNode(e.target.value)} />
        <button onClick={submitValue}>Add nodes</button>
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
