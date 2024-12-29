import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    pickupDestination: null,
    dropoffDestination: null,
    travelTimeInformation: null,
    homeAnimation: "none",
    mapActive: false,
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setPickupDestination: (state, action) => {
            state.pickupDestination = action.payload;
        },
        setDropoffDestination: (state, action) => {
            state.dropoffDestination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        setHomeAnimation: (state, action) => {
            state.homeAnimation = action.payload;
        },
        setMapActive: (state, action) => {
            state.mapActive = action.payload;
        }
    }
})

// Actions (Setters)
export const { setOrigin, setPickupDestination, setDropoffDestination, setTravelTimeInformation, setHomeAnimation, setMapActive } = navigationSlice.actions;

// Selectors
export const selectOrigin = (state) => state.navigation.origin;
export const selectPickupDestination = (state) => state.navigation.pickupDestination;
export const selectDropoffDestination = (state) => state.navigation.dropoffDestination;
export const selectTravelTimeInformation = (state) => state.navigation.travelTimeInformation;
export const selectHomeAnimation = (state) => state.navigation.homeAnimation;
export const selectMapActive = (state) => state.navigation.mapActive;

export default navigationSlice.reducer;