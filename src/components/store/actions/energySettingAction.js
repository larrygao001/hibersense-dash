

import {SET_ENERGY_THRESHOLD,UPDATE_ENERGY_USAGE} from './actionTypes';

export const setEnergyThreshold= energyUsageThreshold =>({
    type:SET_ENERGY_THRESHOLD,
    payload:{
        energyUsageThreshold
    }
});

export const updateEnergyUsuage = energyUsuage =>({
    type:UPDATE_ENERGY_USAGE,
    payload:{
        energyUsuage
    }
})