import React from "react";
import MaterialCard from "../components/materials/MaterialCard";

class SelectedMaterial extends React.Component {
  showMaterial = () => {
    return this.props.selectedMaterial;
    return (
      <MaterialCard
        material={material}
        name={material.name}
        description={material.description}
        key={material.id}
      />
    );
  };

  render() {
    return <div className='selected material'>{this.showMaterial}</div>;
  }
}
