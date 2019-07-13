import React from 'react';
import { Route, Switch } from "react-router-dom";

// file scss
import './style/app.scss';

// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import MyNavBar from './MyNavBar';
import Home from './Home';
import Profile from './Profile';
import Competence from './Competence';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends React.Component {
  
  render() {
    return (
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
  }
}

export default App;
