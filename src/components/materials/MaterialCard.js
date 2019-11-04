import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'
import MaterialsList from './MaterialsList'

class MaterialCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      front: props,
    }
  }

  render() {
    let material = this.props.material

    let name = material.name
    let description = material.description

    return (
      <div>
        <div className="ui card">
          <div className="card">
            <div className="content">
              <div className="header"><b>{material.name}</b></div>
              <div className="description">{material.description}</div>
            </div>
          </div>
        </div><br/>
      </div>
    )
  }



}
export default MaterialCard;
