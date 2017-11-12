import expect from 'expect';
import questionnaireReducer from '../../../containers/questionnaire/questionnaireReducer';
import * as actions from '../../../containers/questionnaire/questionnaireActionCreator';

describe("questionnaireReducer ", () => {
    // ARRANGE
    let initialState = {};

    beforeEach(() => {
        initialState = {
            isSubmitting: false,
            success: false,
            error : {}
        }
    });

    it("should handled request action", () => {

        const action = actions.submitQuestionnaireRequestAction();

        // ACT
        const newState = questionnaireReducer(initialState, action);

        // ASSERT
        expect(newState.isSubmitting).toEqual(true);
    });

    it("should handled failed action", () => {
        const payload = {
          error: "Random error message"
        };

        const action = actions.submitQuestionnaireFailedAction(payload);

        // ACT
        const newState = questionnaireReducer(initialState, action);

        // ASSERT
        expect(newState.isSubmitting).toEqual(false);
        expect(newState.success).toEqual(false);
        expect(newState.error).toBeDefined();
    });

    it("should handle success action", () => {

        const action = actions.submitQuestionnaireSuccesAction();

        // ACT
        const newState = questionnaireReducer(initialState, action);

        // ASSERT
        expect(newState.isSubmitting).toEqual(false);
        expect(newState.success).toEqual(true);
    });
});