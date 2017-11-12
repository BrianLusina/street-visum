/**
 * @author lusinabrian on 10/11/17
 * @notes: Root reducer
 */

import {combineReducers} from 'redux';
import ajax from "./ajaxReducer";
import map from "../containers/map/mapReducer";
import questionnaire from "../containers/questionnaire/questionnaireReducer";

/**
 * Combines all reducers for use in the application
 * Uses short hand property names from ES6
 * */
const rootReducer = combineReducers({
    ajax, map, questionnaire
});

export default rootReducer;
