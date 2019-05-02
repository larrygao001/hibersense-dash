import { SET_ENERGY_THRESHOLD,UPDATE_ENERGY_USAGE } from '../actions/actionTypes';

const initialState = {
    energyUsageThreshold: 0,

    kitchenUsage: 0.27,
    bedroomUsage: 0.89,
    bathroomUsage: 0.18,
    livingroomUsage: 0.67,

}

export default function (state=initialState, action){
    switch(action.type){
        case SET_ENERGY_THRESHOLD: 
            return action.payload
        case UPDATE_ENERGY_USAGE:
            return action.payload
        default:
            return state;
    }
}
