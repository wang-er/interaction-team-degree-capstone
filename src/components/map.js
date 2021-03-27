import React, { useEffect } from "react";
import styled from "styled-components";
import MapNode from "./mapNode";
import { db } from "../config";
import PiggyBankNode from "./piggyBankNode";
import background from "../icons/GoalScreen.png";


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
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
`;

//functional components?
const Map = ({ data, id }) => {
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
          updateMapData(entries);
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
    console.log("lol");

    generateNodeList(entriesList);
  };

  const updateMapData = (data) => {
    var query = db.ref('challenges/').orderByChild('id').equalTo(id);
    query.once("child_added", function (snapshot) {
      if(data !== undefined && data !== null) {
        snapshot.ref.update({ currentDay: Object.keys(data).length })
      } else {
        snapshot.ref.update({ currentDay: 0 })
      }
    });
}

  const generateNodeList = (givenEntries) => {
    var entriesList = [];
    //for values w/o entries first, uncompleted days
    for (var i = 0; i < data.totalDays; i++) {
      entriesList.push({
        day: i,
        id: `${data.id}-${i}`,
        object: { challengeID: data.id },
        state: "future",
      });
    }

    //then replace with ones w/ data?
    for (var j = 0; j < givenEntries.length; j++) {
      entriesList[j] = { day: j, id: `${data.id}-${j}`, object: givenEntries[j].object, state: "past" };
    }

    if (data.totalDays > givenEntries.length) {
      entriesList[givenEntries.length] = {
        day: givenEntries.length,
        id:  `${data.id}-${givenEntries.length}`,
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
          {isLoaded && <PiggyBankNode data={data} id={id}/>}
      </MapContainer>
    </>
  );
};

export default Map;
