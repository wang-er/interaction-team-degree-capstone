import React, { useEffect } from "react";
import styled from "styled-components";
import MapNode from "./mapNode";
import { db } from "../config";

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;
export const Modal = styled.div`
  z-index: 10000;
  position: absolute;
  top: 0;
  left: 0;
  background: grey;
  height: 100vh;
  width: 100vw;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
`;

//functional components?
const Map = ({ data }) => {
  const [mapNodeList, setMapNodeList] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    console.log(data);
    if (data !== undefined) {
      db.ref("entries/")
        .orderByChild("challengeID")
        .equalTo(data.id)
        .on("value", (snapshot) => {
          const entries = snapshot.val();
          sortExistingEntries(entries); //how to escape from on? or keep it?
          setIsLoaded(true);
        });
    }
  }, []);

  const sortExistingEntries = (existingEntries) => {
    var entriesList = [];
    //first get the entries  into alist
    for (var key in existingEntries) {
      entriesList.push({ id: key, object: existingEntries[key] });
    }
    entriesList.sort((a, b) =>
      Date.parse(a.object.date) > Date.parse(b.object.date)
        ? 1
        : Date.parse(b.object.date) > Date.parse(a.object.date)
        ? -1
        : 0
    );

    console.log(entriesList);
    generateNodeList(entriesList);
  };

  const generateNodeList = (givenEntries) => {
    var entriesList = [];
    //for values w/o entries first, uncompleted days
    for (var i = 0; i < data.totalDays; i++) {
      entriesList.push({
        id: i,
        object: { challengeID: data.id },
        state: "future",
      });
    }

    //then replace with ones w/ data?
    for (var j = 0; j < givenEntries.length; j++) {
      entriesList[j] = { id: j, object: givenEntries[j].object, state: "past" };
    }

    if (data.totalDays > givenEntries.length) {
      entriesList[givenEntries.length] = {
        id: givenEntries.length,
        object: { challengeID: data.id },
        state: "current",
      };
    }

    console.log(entriesList);
    setMapNodeList(entriesList);
  };

  //rendering
  return (
    <>
      <MapContainer>
        {isLoaded &&
          mapNodeList.map((node) => {
            return <MapNode data={node} challengeID={data.id} />;
          })}
      </MapContainer>
    </>
  );
};

export default Map;
