export default function materialsReducer(
  state = {loading: false, materials: []}, action
  ) {
  switch(action.type) {
    case "LOADING_MATERIALS":
      return {...state, loading: true}

    case "FETCH_MATERIALS":
      const newMaterials = []
      action.materials.forEach (resp => {
        const material = {
        id: resp.id,
        name: resp.name,
        description: resp.description,
        material_id: resp.material_id
      }
      newMaterials.push(material)
      })
      return {...state, loading: false, materials: state.materials.concat(newMaterials)};

    case "POST_MATERIALS":
      return {state}

    default: return state
  }
}
