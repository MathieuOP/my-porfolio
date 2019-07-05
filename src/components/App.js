import React from 'react';
import AOS from 'aos'; 

// file scss
import './assets/style/app.scss';

// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

// components
import Header from './Header';
import Presentation from './Presentation';
import Competence from './Competence';

class App extends React.Component {

  componentDidMount() {
    AOS.init();
    AOS.refresh();
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Presentation />
        <Competence />
      </div>
    );
  }
}

export default App;
