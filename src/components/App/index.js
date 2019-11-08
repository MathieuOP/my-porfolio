import React from 'react';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from 'components/MyNavBar';
import Home from 'components/Home';
import Profile from 'components/Profile';
import Competence from 'components/Competence';
import Portfolio from 'components/Portfolio';
import Contact from 'components/Contact';

const App = () => (
  <div className="app">
    <MyNavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/competences" component={Competence} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </div>
);

export default App;
