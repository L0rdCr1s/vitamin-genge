import { createStore } from "redux"
import { reducers_manager } from "./reducers/reducersManager"

export const tmms_store = createStore(reducers_manager)