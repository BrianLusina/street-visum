/**
 * @author lusinabrian on 12/11/17.
 * @notes: Action creator for questionnaireActionCreator
 */
import * as types from './questionnaireActionTypes';

export function submitQuestionnaireRequestAction() {
    return {type: types.SUBMIT_QUESTIONNAIRE_REQUEST};
}

export function submitQuestionnaireFailedAction(payload) {
    return {type: types.SUBMIT_QUESTIONNAIRE_FAILURE, payload};
}

export function submitQuestionnaireSuccesAction() {
    return {type: types.SUBMIT_QUESTIONNAIRE_SUCCESS};
}