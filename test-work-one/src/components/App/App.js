import React from 'react';
import { Route } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {


  return (
    <div className="page">

      <Route exact path='/'>
        <Header />
        <Main />
      </Route>

    </div>
  );
}

export default App;
