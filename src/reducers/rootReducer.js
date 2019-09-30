import { combineReducers } from "redux"
import manageMaterials from "./manageMaterials"
import manageRecycleCenters from "./manageRecycleCenters"

const rootReducer = combineReducers({materials: manageMaterials, recycleCenters: manageRecycleCenters})

export default rootReducer
