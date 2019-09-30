import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'
import MaterialsList from './MaterialsList'

class MaterialCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      front: props,
      count: 0
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count+1
    })
    console.log(this.state)
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
              <div className="header">{material.name}</div>
              <div className="description">{material.description}</div>
              <div className="counter">Likes: {this.state.count}</div>
            </div>
            <div className="ui bottom attached button" onClick={this.handleClick}>
              Like
            </div>
          </div>
        </div>
      </div>
    )
  }



}
export default MaterialCard;
