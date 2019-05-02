import {
    SET_KITCHEN_TEMPERATURE,
    SET_BEDROOM_TEMPERATURE,
    SET_LIVINGROOM_TEMPERATURE,
    SET_BATHROOM_TEMPERATURE,

    CHANGE_KITCHEN_TEMPERATURE,
    CHANGE_BEDROOM_TEMPERATURE,
    CHANGE_BATHROOM_TEMPERATURE,
    CHANGE_LIVINGROOM_TEMPERATURE,

    SET_KITCHEN_STATUS,
    SET_BEDROOM_STATUS,
    SET_BATHROOM_STATUS,
    SET_LIVINGROOM_STATUS,

    SET_KITCHEN_TEMP_DATA,
    SET_LIVINGROOM_TEMP_DATA,
    SET_BEDROOM_TEMP_DATA,
    SET_BATHROOM_TEMP_DATA
} from '../actions/actionTypes';

const initialState={
    kitchenCurrentTemp:77,
    bedroomCurrentTemp:77,
    livingroomCurrentTemp:77,
    bathroomCurrentTemp:77,

    kitchenTemperature:77,
    bedroomTemperature:77,
    livingroomTemperature:77,
    bathroomTemperature:77,

    livingroomStatus:"cooling",
    bedroomStatus:"cooling",
    bathroomStatus:"cooling",
    kitchenStatus:"cooling",

    livingroomTempData:{},
    bedroomTempData:{},
    bathroomTempData:{},
    kitchenTempData:{},
}

export default function(state=initialState, action){
    switch(action.type){
        case SET_KITCHEN_TEMPERATURE:{
            return{
                ...state,
                kitchenTemperature:action.payload
            } 
        }
        case SET_BEDROOM_TEMPERATURE:{
            return{
                ...state,
                bedroomTemperature: action.payload
            }
        }
        case SET_LIVINGROOM_TEMPERATURE:{
            return{
                ...state,
                livingroomTemperature: action.payload
            }
        }
        case SET_BATHROOM_TEMPERATURE:{
            return{
                ...state,
                bathroomTemperature: action.payload
            }
        }
        case CHANGE_KITCHEN_TEMPERATURE:{
            return{
                ...state,
                kitchenCurrentTemp: action.payload
            }
        }
        case CHANGE_LIVINGROOM_TEMPERATURE:{
            return{
                ...state,
                livingroomCurrentTemp: action.payload
            }
        }
        case CHANGE_BEDROOM_TEMPERATURE:{
            return{
                ...state,
                bedroomCurrentTemp: action.payload
            }
        }
        case CHANGE_BATHROOM_TEMPERATURE:{
            return{
                ...state,
                bathroomCurrentTemp: action.payload
            }
        }
        case SET_KITCHEN_STATUS:{
            return{
                ...state,
                kitchenStatus: action.payload
            }
        }
        case SET_BEDROOM_STATUS:{
            return{
                ...state,
                bedroomStatus: action.payload
            }
        }
        case SET_BATHROOM_STATUS:{
            return{
                ...state,
                bathroomStatus: action.payload
            }
        }
        case SET_LIVINGROOM_STATUS:{
            return{
                ...state,
                livingroomStatus: action.payload
            }
        }

        case SET_KITCHEN_TEMP_DATA:{
            return{
                ...state,
                kitchenTempData: action.payload
            }
        }
        case SET_LIVINGROOM_TEMP_DATA:{
            return{
                ...state,
                livingroomTempData: action.payload
            }
        }
        case SET_BEDROOM_TEMP_DATA:{
            return{
                ...state,
                bedroomTempData: action.payload
            }
        }
        case SET_BATHROOM_TEMP_DATA:{
            return{
                ...state,
                bathroomTempData: action.payload
            }
        }

        default:
            return state

    }
}