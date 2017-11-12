/**
 * @author lusinabrian on 12/11/17
 * @notes: mapActionCreator action creator test
 */
import expect from 'expect';
import * as actions from '../../../containers/map/mapActionCreator';
import * as types from '../../../containers/map/mapActionTypes';

describe("mapActionCreator", function () {

    it("should create a fetchLocationRequestAction action", function () {
        const expectedAction = {type: types.FETCH_LOCATION_REQUEST};

        const action = actions.fetchLocationRequestAction();

        expect(action).toEqual(expectedAction);
    });

    it("should create a fetchLocationSuccessAction action", function () {
        const payload = {
            coords : {
                accuracy: Math.random(),
                altitude: Math.random(),
                altitudeAccuracy: Math.random(),
                heading: Math.random(),
                speed: Math.random(),
                longitude: Math.random(),
                latitude: Math.random()
            },
            timestamp: Math.random().toString()
        };

        const expectedAction = {type: types.FETCH_LOCATION_SUCCESS, payload};

        const action = actions.fetchLocationSuccessAction(payload);

        expect(action).toEqual(expectedAction);
    });

    it("should create a fetchLocationFailureAction action", function () {
        const payload = {
            code: 2,
            message: "Position Unavailable"
        };

        const expectedAction = {type: types.FETCH_LOCATION_FAILED, payload};

        const action = actions.fetchLocationFailedAction(payload);

        expect(action).toEqual(expectedAction);
    });
});