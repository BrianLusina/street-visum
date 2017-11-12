/**
 * @author lusinabrian on 10/11/17.
 * @notes: Action creator for mapActionCreator
 */
import * as types from './mapActionTypes';

/**
 * Fetch location request action creator
 * @returns {Object} type of action for reducer to handle
* */
export function fetchLocationRequestAction() {
    return {type: types.FETCH_LOCATION_REQUEST};
}

/**
 * Fetch location failed action will carry the payload and the type of action
 * in this case, this will trigger the reducer to update the state of the store. This will happen
 * when we can not get user location, or when we can not get user permission
 * @param {Object} payload with error information
 * @returns {Object} Type of action for reducer to handle including payload information
 * */
export function fetchLocationFailedAction(payload) {
    return {type: types.FETCH_LOCATION_FAILED, payload};
}

/**
 * Fetch location success action with payload of user geo location
 * @param {Object} payload contains user coordinates
 * @returns {Object} type of action and payload information
 * */
export function fetchLocationSuccessAction(payload) {
    return {type: types.FETCH_LOCATION_SUCCESS, payload};
}