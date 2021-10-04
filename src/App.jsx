import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ItemsHome from './components/ItemsHome';
import data from './components/data';

const App = () => (
  <div className="wrapper_homes">
    <p>Homes guests loves</p>

    <ItemsHome data={data} />
  </div>
);

export default App;
