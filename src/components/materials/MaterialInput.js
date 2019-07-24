import React, { Component } from 'react'
// import Select from 'react-virtualized-select';
import Select from 'react-select';
import 'react-virtualized-select/styles.css'
// import VirtualizedSelect from 'react-virtualized-select'
import { connect } from 'react-redux';

import MaterialsList from './MaterialsList'
import MaterialCard from './MaterialCard'
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
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("handleSubmit", this.state)
    this.props.postMaterial(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p> Search for Recycling Centers near:</p>
            <label>
              <input type="text" placeholder="enter ZIP code" onChange={this.handleLocationChange}/>
            </label>
            <br /><br />
            {this.renderMaterialsSearch()}
            <br />
              <input type="submit" value="Search Area" />
               {/*<MaterialsList materials={this.props.materials}/>*/}
        </form>
          {this.renderMaterialDescription()}
          <MaterialCard material={this.props} />
      </div>
      )
   }
}

export default connect(null, {postMaterial})(MaterialInput)
