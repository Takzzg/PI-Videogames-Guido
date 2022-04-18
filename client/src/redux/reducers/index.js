import { combineReducers } from "redux"
import { sidebarReducer as sidebar } from "./sidebar"
import { rootReducer as root } from "./root"

const reducers = combineReducers({ root, sidebar })

export { reducers }
