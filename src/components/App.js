import React from 'react';

// file scss
import './assets/style/app.scss';

// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Header from './Header';
import Presentation from './Presentation';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Presentation />
      
    </div>
  );
}

export default App;
