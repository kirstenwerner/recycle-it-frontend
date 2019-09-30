import React, { Component } from 'react'
import { connect } from 'react-redux'

import MaterialsList from '../components/materials/MaterialsList'
import MaterialInput from '../components/materials/MaterialInput'
import { fetchMaterials } from '../actions/materialsActions'

class SearchContainer extends Component {

  componentDidMount() {
    return this.props.fetchMaterials()
  }

  render() {
    return (
      <div>
        <MaterialInput materials={this.props.materials} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {materials: state.materials.materials}
}

SearchContainer.defaultProps = {
  materials: []
}

export default connect(mapStateToProps, {fetchMaterials})(SearchContainer)
// export default SearchContainer
