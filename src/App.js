import './App.css';
import TestList from './components/test-list'
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
import LandingPage from './pages/onboarding/landing';
import OnboardingPage from './pages/onboarding/onboarding';
import CreateAccountPage from './pages/onboarding/new-user';
import CreateAccountDetailsPage from './pages/onboarding/create-account';
import LoginPage from './pages/onboarding/login';
import ImageUpload from './components/imageUpload';

function App() {
  const [user, setUser] = React.useState({});

  const [userID, setUserID] = React.useState("");
  const updateUserID = id => {
    console.log("USER ID "  + id);
    setUserID(id);
  }

  const [isLoaded, setIsLoaded] = React.useState(false);

  //get current User
  useEffect(() => {
    if(userID != "") {
      db.ref(`users/${userID}`).on('value', snapshot => { //HARDCODED TODO
        const user = snapshot.val();
        console.log(user);
        console.log("I FOUND MY DATA" + userID);
        setUser(user);
        setIsLoaded(true);
        // preloadChallenge(user);
      });
    }  else {
      console.log(user);
      setIsLoaded(true);
    }
  }, []);

  //just for testing purposes? not sure if we'll need this when users have to log in a whatnot
  //mainly to deal with reloading the map screen page
  const preloadChallenge = (givenUser) => {
    db.ref("challenges/")
      .orderByChild("userID")
      .equalTo(givenUser.id)
      .on("value", (snapshot) => {
        const challenges = snapshot.val();
        console.log(challenges);
        if (Object.keys(challenges).length !== 0) {
          setMapID(challenges[Object.keys(challenges)[0]].id);
        }
        setIsLoaded(true);
      });
  };

  const [currentMapID, setMapID] = React.useState("");
  const updateMap = (map) => {
    setMapID(map);
  };

  return (<> {isLoaded &&
    <Router>
      <div>
        <Switch>
        <Route path="/landing">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginPage onUserUpdate={updateUserID} />
          </Route>
          <Route path="/onboarding">
            <OnboardingPage/>
          </Route>
          <Route path="/create-account">
            <CreateAccountPage/>
          </Route>
          <Route path="/create-account-details">
            <CreateAccountDetailsPage  onUserUpdate={updateUserID}/>
          </Route>
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
          <Route path="/home">
            <HomePage onMapUpdate={updateMap} user={user} userID={userID} />
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </div>
    </Router>}
  </>
  );
}

export default App;
