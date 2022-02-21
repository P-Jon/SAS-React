import './App.css';
import ConsentForm from './components/ConsentForm';
import Home from './components/Home';
import Disclaimer from './components/Disclaimer';


import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ConsentForm />}> </Route>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/home" element={<Disclaimer />}> </Route>
      </Routes >
    </Router >
  );
}
/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Button buttonType="" name="Test Button" />

      */
