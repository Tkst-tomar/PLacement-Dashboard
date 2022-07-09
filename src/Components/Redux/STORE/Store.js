import { createStore } from "redux";
import rootReducer from "../COMBINE REDUCER/CombinedReducer";

const store = createStore(rootReducer)

export default store