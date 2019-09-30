import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Container } from 'semantic-ui-react'

import MaterialCard from './MaterialCard';
import { fetchMaterials } from '../../actions/materialsActions';

class MaterialsList extends Component {

  componentDidMount() {
    console.log("a")
    this.props.fetchMaterials()
    console.log("b")
    //a, c, d, (e), b
  }

  render() {
    return(
      <Container className="ui four column doubling stackable grid container">
      <br />
      <br />
      <div id="material_cards" className="ui four stackable cards">
        <Card.Group >
          {this.props.materials.map(material =>
            <MaterialCard key={material.id} material={material} />
          )}
        </Card.Group>
        </div>
      </Container>
    )
};
}

const mapStateToProps = state => {
  return {materials: state.materials.materials}
}

MaterialsList.defaultProps = {
  materials: []
}

export default connect(mapStateToProps, {fetchMaterials})(MaterialsList)
