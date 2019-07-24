export default function fetchRecycleCenters(state) {
   return dispatch => {
      dispatch({ type: "LOADING_RECYCLE_CENTERS" })
      const url = "http://localhost:3000/recycle_centers"
      return fetch(url, {method: "POST", params: state})
         .then(resp => {
            console.log(resp)
            return resp.json()
         })
         .catch(error => console.log(error))
         .then(recycleCenters => {
            return dispatch({ type: "FETCH_RECYCLE_CENTERS", recycleCenters})
         })
   }
}
