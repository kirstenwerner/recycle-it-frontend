import React, { Component } from 'react';
import MaterialsContainer from '../../containers/MaterialsContainer'

const MaterialCard = props => {
  const { material } = props;

    return (
      <div className="ui column">
        <div className="ui card" key={material.id} onClick={() => props.handleClick(material)}>
          <div className="content">
            <div className="header">
              {material.name}
            </div>
            <div className="meta text-wrap">
              <small>{material.description}</small>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MaterialCard;
