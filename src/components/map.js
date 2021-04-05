import React, { useEffect } from "react";
import styled from "styled-components";
import MapNode from "./mapNode";
import { db } from "../config";
import PiggyBankNode from "./piggyBankNode";
import EditIcon from "../icons/Edit.svg";
import StarIcon from "../icons/Star.svg";
import BackIcon from "../icons/Back.svg";
import { white } from "./base/colors";
import { Link } from "react-router-dom";

export const MapOverlay = styled.div`
    width: 100vw;
    height: 140px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0,0,0,1), rgba(255,0,0,0));
    // backdrop-filter: blur(6px);

    z-index: 1000;
`

export const BackButton = styled(Link)`
    position: fixed;
    top: 25px;
    left: 18px;
    width: 25px;
    img {
      
    }
    z-index: 1000;
    // font-size: 20px;
    // color: ${white};
`

export const DayTracker = styled.div`
    font-size: 15px;
    font-weight: 500;
    font-family: "Work Sans", sans-serif;
    text-transform: uppercase;
    color: #EAE3FF;
`
export const ChallengeName = styled.div`
    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    color: ${white};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 5px;
      width: 17px;
      height: 17px;
  }
`

export const Reward = styled.div`
    box-shadow: 0px 1px 9px #3508081A;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    font-size: 11px;
    border-radius: 50px;
    padding: 6px 20px;
    border: none;
    margin-top: 10px;

    color: #240D68;
    background: ${white};
    text-decoration: none;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
        margin-left: -10px;
    }
    div {
        width: 100%;
        margin-left: 5px;
    }
`

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 100px;
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
      <MapOverlay>
        <ChallengeName>
          {data.title}
          <img src={EditIcon}/>
        </ChallengeName>
        <DayTracker>
          {data.currentDay} / {data.totalDays}
        </DayTracker>
        <Reward>
          <img src={StarIcon}/>
          <div> <b>REWARD:</b> {data.reward}</div>
         
        </Reward>
      </MapOverlay>
      <BackButton to="/home">
        <img src={BackIcon}/>
      </BackButton>
      <BackButton src={BackIcon}/>
      <MapContainer>
        {isLoaded &&
          mapNodeList.map((node) => {
            return <MapNode data={node} challengeID={data.id} totalDay={data.totalDays} />;
          })}
          {isLoaded && <PiggyBankNode data={data} id={id}/>}
      </MapContainer>
    </>
  );
};

export default Map;
