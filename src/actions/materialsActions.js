export function fetchMaterials() {
  return dispatch => {
    dispatch({ type: "LOADING_MATERIALS" })
    const url = "http://localhost:3000/materials"
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(resp => resp.json())
      .then(json => dispatch({ type: "FETCH_MATERIALS", materials: json}))
  };
}

export function postMaterial(state) {
  return dispatch => {
    dispatch({ type: "POST_MATERIALS" })
    const url = "http://localhost:3000/zip_long_lats"
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    })
      .then(resp => resp.json())
      // .then(json => console.log(json))
      .then(json => dispatch({ type: "FETCH_RECYCLE_CENTERS", recycleCenters: json}))
  }
}
