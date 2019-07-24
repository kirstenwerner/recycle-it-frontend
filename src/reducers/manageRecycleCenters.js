export default function manageRecycleCenters (state = {}, action) {
   switch (action.type) {

      case "LOADING_RECYCLE_CENTERS":
         console.log("Loading recycle centers")

      case "FETCH_RECYCLE_CENTERS":
      debugger
         let x = {...state, recycleCenters: action.recycleCenters}
         return x

      default:
         return state
   }
}
