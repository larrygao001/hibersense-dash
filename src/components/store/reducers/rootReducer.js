import { combineReducers } from "redux";
import energyusage from './energyReducer';
import temperature from './temperatureReducer';

export default combineReducers({
    energyusage,temperature
})