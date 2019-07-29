import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import MaterialsList from './MaterialsList'

class MaterialCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      front: props
    }
  }

  render() {
    let material = this.props.material

    let name = material.name
    let description = material.description

    return (
      <div>
        <Card className="ui link card">
          <Card.Content
            header={material.name}
            description={material.description}
          >
          </Card.Content>
        </Card><br />
      </div>
    )
  }



}
export default MaterialCard;
