import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import { DropdownButton, Dropdown } from 'react-bootstrap';

import MaterialsList from '../components/materials/MaterialsList'
import MaterialInput from '../components/materials/MaterialInput'
import { fetchMaterials } from '../actions/materialsActions'


import { connect } from 'react-redux'

class MaterialsContainer extends Component {

  componentDidMount() {
    return this.props.fetchMaterials()
  }

  render() {
    return (
      <div>
        <MaterialInput materials={this.props.materials} />
        {/* <MaterialsList materials={this.props.materials} /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {materials: state.materials.materials}
}

MaterialsContainer.defaultProps = {
  materials: []
}

export default connect(mapStateToProps, {fetchMaterials})(MaterialsContainer)
