/**
 * @author lusinabrian on lusinabrian.
 * @notes: questionnaireReducer reducer
 */

import * as types from './questionnaireActionTypes';
import initialState from './initialState';

/**
 * questionnaireReducer reducer takes current state and action and
 * returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function questionnaireReducer(state = initialState, action) {
    switch (action.type) {
        case types.SUBMIT_QUESTIONNAIRE_REQUEST:
            return Object.assign({}, state,
                {
                    isSubmitting: true,
                }
            );
        case types.SUBMIT_QUESTIONNAIRE_SUCCESS:
            return Object.assign({}, state,
                {
                    isSubmitting: false,
                    success: true
                }
            );
        case types.SUBMIT_QUESTIONNAIRE_FAILURE:
            return Object.assign({}, state,
                {
                    isSubmitting: false,
                    success:false,
                    error: action.payload
                }
            );
        default:
            return state;
    }
}
