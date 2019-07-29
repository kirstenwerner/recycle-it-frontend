import React, { Component } from 'react'
import Select from 'react-select';
import { connect } from 'react-redux';
import { Form, Container } from 'semantic-ui-react'

import { postMaterial } from '../../actions/materialsActions'


export class MaterialInput extends Component {

  state = {
    location: "",
    material: {
      name: "",
      id: ""
    }
  }

  renderMaterialsSearch = () => {
      const options = this.props.materials.map(m => {
        return {value: m.material_id, label: m.name}
      })
      return <Select options={options} placeholder="And select the material you'd like to dispose of..." onChange={this.handleMaterialChange}/>

  }

  renderMaterialDescription = () => {
    return(
      <div className={"material-description"}>
        <p>{this.state.material.name}</p>
      </div>
    )
  }


  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    })
  }

  handleMaterialChange = (value) => {
    this.setState({
      material: {
        name: value.label,
        id: value.value
      }
    })
    this.renderMaterialsSearch()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("handleSubmit", this.state)
    this.props.postMaterial(this.state)
  }

  render() {
    return (
      <Container class="ui-form">
        <form onSubmit={this.handleSubmit}>
          <h3> Search for Recycling Centers near:</h3>
            <label>
              <input type="text" placeholder="enter ZIP code" onChange={this.handleLocationChange}/>
            </label>
            <br /><br />
            {this.renderMaterialsSearch()}
            <input type="submit" value="Search Area" />
            <br />
        </form><br />
      </Container>
      )
   }
}

const mapStateToProps = state => {
   return {recycleCenters: state.recycleCenters.recycleCenters}
}

export default connect(null, {postMaterial})(MaterialInput)
