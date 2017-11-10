/**
 * @author lusinabrian on lusinabrian.
 * @notes: mapReducer reducer
 */

import * as types from './mapActionTypes';
import initialState from './initialState';

/**
 * mapReducer reducer takes current state and action and
 * returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function mapReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_LOCATION_REQUEST:
            return Object.assign({}, state, {
                isRequesting: true
            });

        case types.FETCH_LOCATION_SUCCESS:
            return Object.assign({}, state, {
                isRequesting: false,
                coords: {
                    accuracy: action.payload.coords.accuracy,
                    altitude: action.payload.coords.altitude,
                    altitudeAccuracy: action.payload.coords.altitudeAccuracy,
                    heading: action.payload.coords.heading,
                    speed: action.payload.coords.speed,
                    longitude: action.payload.coords.longitude,
                    latitude: action.payload.coords.latitude
                },
                timestamp: action.payload.timestamp
            });

        case types.FETCH_LOCATION_FAILED:
            return Object.assign({}, state, {
                isRequesting: false,
                error: {
                    code: action.payload.code,
                    message: action.payload.message
                }
            });

        default:
            return state;
    }
}
