import './App.css';

import WelcomePage from './components/WelcomePage';
import QuestionForm from './components/QuestionForm';
import Home from './components/Home';
import Disclaimer from './components/Disclaimer';
import Book from './components/Book';



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
        <Route exact path="/" element={<WelcomePage />}> </Route>

        <Route exact path="/consent" element={<QuestionForm formType="consent" />}> </Route>
        <Route exact path="/finish" element={<QuestionForm formType="final" />}> </Route>

        <Route path="/home" element={<Home />}> </Route>
        <Route path="/disclaimer" element={<Disclaimer />}> </Route>

        <Route path="/book/frogbook1" element={<Book name={"Frogbook"} version={"1"} length={"8"} />}> </Route>
        <Route path="/book/frogbook2" element={<Book name={"Frogbook"} version={"2"} length={"8"} />}> </Route>
        <Route path="/book/frogbook3" element={<Book name={"Frogbook"} version={"3"} length={"8"} />}> </Route>
        <Route path="/book/frogbook4" element={<Book name={"Frogbook"} version={"4"} length={"8"} />}> </Route>


        <Route path="/book/springloaded1" element={<Book name={"Springloaded"} version={"1"} length={"8"} />}> </Route>
      </Routes >
    </Router >
  );
}