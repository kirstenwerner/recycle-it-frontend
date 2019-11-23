import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { Form, Container } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

import { postMaterial } from "../../actions/materialsActions";

export class MaterialInput extends Component {
  state = {
    location: "",
    material: {
      name: "",
      id: ""
    }
  };

  renderMaterialsSearch = () => {
    const options = this.props.materials.map(m => {
      return { value: m.material_id, label: m.name };
    });
    return (
      <Select
        options={options}
        placeholder="And select the material you'd like to dispose of..."
        onChange={this.handleMaterialChange}
      />
    );
  };

  renderMaterialDescription = () => {
    return (
      <div className={"material-description"}>
        <p>{this.state.material.name}</p>
      </div>
    );
  };

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleMaterialChange = value => {
    this.setState({
      material: {
        name: value.label,
        id: value.value
      }
    });
    this.renderMaterialsSearch();
  };

  canBeSubmitted() {
    const { location, material } = this.state;
    return location.length == 5 && material.name.length > 0;
  }

  handleSubmit = event => {
    if (!this.canBeSubmitted()) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    console.log("handleSubmit", this.state);
    this.props.postMaterial(this.state);
  };

  refreshPage = () => {
    window.location.reload(false);
  };

  render() {
    const isEnabled = this.canBeSubmitted();

    return (
      <Container class='ui-form'>
        <form onSubmit={this.handleSubmit}>
          <h3> Search for Recycling Centers near:</h3>
          <label>
            <input
              type='text'
              placeholder='enter ZIP code'
              onChange={this.handleLocationChange}
            />
          </label>
          <br />
          <br />
          {this.renderMaterialsSearch()}
          <Button
            size='medium'
            color='green'
            onclick={this.handleSubmit}
            disabled={!isEnabled}
          >
            Search Area
          </Button>
          <br />
        </form>
        <br />
        <center>
          <Button size='medium' color='yellow' onClick={this.refreshPage}>
            New Search
          </Button>
        </center>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { recycleCenters: state.recycleCenters.recycleCenters };
};

export default connect(null, { postMaterial })(MaterialInput);
