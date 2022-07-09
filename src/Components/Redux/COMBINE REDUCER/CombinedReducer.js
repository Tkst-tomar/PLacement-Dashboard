import { combineReducers } from "redux";
import UserInfoData from "../REDUCER/MainReducer";
import ScrollHandler from "../REDUCER/ScrollReducer";

const rootReducer = combineReducers({
    UserInfoData,
    ScrollHandler
})

export default rootReducer