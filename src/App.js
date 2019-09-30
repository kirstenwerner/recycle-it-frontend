import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import RecycleCenterFinderContainer from './containers/RecycleCenterFinderContainer'
import MaterialsList from './components/materials/MaterialsList';

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/' component={ Home } />
        <Route exact path='/recycle-center-finder' component={ RecycleCenterFinderContainer } />
        <Route exact path='/materials' component={ MaterialsList } />
      </div>
    </Router>
  );
}

export default App;
