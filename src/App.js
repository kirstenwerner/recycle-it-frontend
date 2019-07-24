import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchMaterials} from './actions/materialsActions'
import MaterialsContainer from './containers/MaterialsContainer';
import RecycleCentersContainer from './containers/RecycleCentersContainer'

function App() {
  return (
    <div className="App">
      <MaterialsContainer />
      <RecycleCentersContainer />
    </div>
  );
}

export default App;
