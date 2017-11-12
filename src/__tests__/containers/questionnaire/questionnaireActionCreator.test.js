/**
 * @author lusinabrian on 12/11/17
 * @notes: questionnaireActionCreator action creator test
 */
import expect from 'expect';
import * as actions from '../../../containers/questionnaire/questionnaireActionCreator';
import * as types from '../../../containers/questionnaire/questionnaireActionTypes';

describe("questionnaireActionCreator ", function () {

    it("should create a submitQuestionnaireRequestAction", function () {
        const expectedAction = {type: types.SUBMIT_QUESTIONNAIRE_REQUEST,};

        const action = actions.submitQuestionnaireRequestAction();

        expect(action).toEqual(expectedAction);
    });

    it("should create a submitQuestionnaireSuccess action", function () {
        const expectedAction = {type: types.SUBMIT_QUESTIONNAIRE_SUCCESS,};

        const action = actions.submitQuestionnaireSuccesAction();

        expect(action).toEqual(expectedAction);
    });

    it("should create a submitQuestionnaireFailure action", function () {
        const payload = {
            message: "Failed to submit questionnaire"
        };

        const expectedAction = {type: types.SUBMIT_QUESTIONNAIRE_FAILURE, payload};

        const action = actions.submitQuestionnaireFailedAction(payload);

        expect(action).toEqual(expectedAction);
    });
});