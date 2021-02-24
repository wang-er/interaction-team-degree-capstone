import './App.css';
import TestList from './components/test-list'
import ImageUpload from "./ImageUpload/index";
import MapPage from './pages/map-screen'
import HomePage from './pages/home'
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/navigation';
import AccountPage from './pages/account';
import FAQPage from './pages/faq';
import SettingsPage from './pages/settings';
import { db } from './config';

function App() {

  const [user, setUser] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);

  //get current User
  useEffect(() => {
    db.ref(`users/user2`).on('value', snapshot => { //HARDCODED TODO
      const user = snapshot.val();
      console.log(user);
      setUser(user);
      preloadChallenge(user);
    });
  }, []);


  //just for testing purposes? not sure if we'll need this when users have to log in a whatnot
  //mainly to deal with reloading the map screen page
  const preloadChallenge = (givenUser) => {
    db.ref('challenges/').orderByChild('userID').equalTo(givenUser.id).on('value', snapshot => {
      const challenges = snapshot.val();
      console.log(challenges);
      if (Object.keys(challenges).length !== 0) {
        setMapID(challenges[Object.keys(challenges)[0]].id);
      }
      setIsLoaded(true);
    });
  }


  const [currentMapID, setMapID] = React.useState("");
  const updateMap = map => {
    setMapID(map);
  }

  return (<> {isLoaded &&
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/map">
            <MapPage ID={currentMapID} />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/faq">
            <FAQPage />
          </Route>
          <Route path="/settings">
            <TestList />
            <ImageUpload />
          </Route>
          <Route path="/">
            <HomePage onMapUpdate={updateMap} user={user} />
          </Route>
        </Switch>
      </div>
    </Router>}
  </>
  );
}

export default App;