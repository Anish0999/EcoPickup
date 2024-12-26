import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    pickupDestination: null,
    dropoffDestination: null,
    travelTimeInformation: null
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.origin;
        },
        setPickupDestination: (state, action) => {
            state.pickupDestination = action.origin;
        },
        setDropoffDestination: (state, action) => {
            state.dropoffDestination = action.origin;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }
    }
})

// Actions (Setters)
export const { setOrigin, setPickupDestination, setDropoffDestination, setTravelTimeInformation } = navigationSlice.actions;

// Selectors
export const selectOrigin = (state) => state.navigation.origin;
export const selectPickupDestination = (state) => state.navigation.pickupDestination;
export const selectDropoffDestination = (state) => state.navigation.dropoffDestination;
export const selectTravelTimeInformation = (state) => state.navigation.travelTimeInformation;

export default navigationSlice.reducer;