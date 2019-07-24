import React, { Component } from 'react';
import MaterialCard from './MaterialCard'

class MaterialsList extends Component {

  renderMaterials = () => {
    return this.props.materials.map(material =>
      <MaterialCard material={material} key={material.id} />
    )
  }

  componentWillUpdate(nextProps, nextState) {
    document.querySelector('div.materials-list').innerHTML = ""
  }

  render() {
    return(
      <div className="materials-list">
        {this.renderMaterials()}
      </div>
    );
  }
};



export default MaterialsList
