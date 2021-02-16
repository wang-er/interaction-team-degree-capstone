import logo from './logo.svg';
import './App.css';
import TestList from './components/test-list'
import MapPage from './pages/map-screen'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/navigation';
import AccountPage from './pages/account';
import FAQPage from './pages/faq';
import SettingsPage from './pages/settings';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/map">
            <MapPage />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/faq">
            <FAQPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/">
            <TestList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  // return (
  //   <div>
  //     <h1>React + Firebase</h1>
  //     <TestList/>
  //     <MapPage/>
  //   </div>
  // );
}

export default App;