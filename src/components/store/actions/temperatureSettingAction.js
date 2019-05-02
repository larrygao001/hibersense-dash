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
} from './actionTypes';

export const setKitchenTemp = temperature =>({
    type:SET_KITCHEN_TEMPERATURE,
    payload:{
        temperature
    }
});
export const setBedroomTemp = temperature =>({
    type:SET_BEDROOM_TEMPERATURE,
    payload:{
        temperature
    }
});
export const setLivingroomTemp = temperature =>({
    type:SET_LIVINGROOM_TEMPERATURE,
    payload:{
        temperature
    }
});
export const setBathroomTemp = temperature =>({
    type:SET_BATHROOM_TEMPERATURE,
    payload:{
        temperature
    }
});

//Change current temperature when temperature is set to be different
export const changeKitchenTemp = temperature =>({
    type:CHANGE_KITCHEN_TEMPERATURE,
    payload:{
        temperature
    }
})
export const changeBedroomTemp = temperature =>({
    type:CHANGE_BEDROOM_TEMPERATURE,
    payload:{
        temperature
    }
})
export const changeLivingroomTemp = temperature =>({
    type:CHANGE_LIVINGROOM_TEMPERATURE,
    payload:{
        temperature
    }
})
export const changeBathroomTemp = temperature =>({
    type:CHANGE_BATHROOM_TEMPERATURE,
    payload:{
        temperature
    }
})

export const setKitchenStatus = status=>({
    type:SET_KITCHEN_STATUS,
    payload:{
        status
    }
})
export const setLivingroomStatus = status=>({
    type:SET_LIVINGROOM_STATUS,
    payload:{
        status
    }
})
export const setBathroomStatus = status=>({
    type:SET_BATHROOM_STATUS,
    payload:{
        status
    }
})
export const setBedroomStatus = status=>({
    type:SET_BEDROOM_STATUS,
    payload:{
        status
    }
})
export const setLivingroomTempData = data =>({
    type:SET_LIVINGROOM_TEMP_DATA,
    payload:{
        data
    }
})  
export const setKitchenTempData = data =>({
    type:SET_KITCHEN_TEMP_DATA,
    payload:{
        data
    }
})  
export const setBedroomTempData = data =>({
    type:SET_BEDROOM_TEMP_DATA,
    payload:{
        data
    }
})  
export const setBathroomTempData = data =>({
    type:SET_BATHROOM_TEMP_DATA,
    payload:{
        data
    }
})  