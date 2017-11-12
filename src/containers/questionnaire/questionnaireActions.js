/**
 * @author lusinabrian on 12/11/17.
 * @notes:
 */

import { submitQuestionnaireSuccesAction, submitQuestionnaireRequestAction, submitQuestionnaireFailedAction } from "./questionnaireActionCreator";
import { ajaxCallSuccess, ajaxCallError, beginAjaxCall } from "../../actionCreators/ajaxActionCreator"
import { postQuestionnaire } from "../../api/mockApi";

export function submitQuestionnaire(shop, airtime, mobileMoney, agentComment) {
    return dispatch => {
        let data = {
            shop, airtime, mobileMoney, agentComment
        };

        dispatch(submitQuestionnaireRequestAction());
        dispatch(beginAjaxCall());

        postQuestionnaire(data)
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