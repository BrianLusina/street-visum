/**
 * @author lusinabrian on 12/11/17.
 * @notes:
 */

import { submitQuestionnaireSuccesAction, submitQuestionnaireRequestAction, submitQuestionnaireFailedAction } from "./questionnaireActionCreator";
import { ajaxCallSuccess, ajaxCallError, beginAjaxCall } from "../../actionCreators/ajaxActionCreator"
import { postQuestionnaire } from "../../api/mockApi";

export function submitQuestionnaire(formData) {
    return dispatch => {

        dispatch(submitQuestionnaireRequestAction());
        dispatch(beginAjaxCall());

        postQuestionnaire(formData)
            .then( response => {
                dispatch(submitQuestionnaireSuccesAction());
                dispatch(ajaxCallSuccess());
            })
            .catch(error => {
                dispatch(ajaxCallError(error));
                dispatch(submitQuestionnaireFailedAction(error));
            });
    }
}