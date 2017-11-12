import expect from 'expect';
import mapReducer from '../../../containers/map/mapReducer';
import * as actions from '../../../containers/map/mapActionCreator';

describe("mapReducer ", () => {
    let initialState = {};

    beforeEach(() => {
        initialState = {
            isRequesting: false,
            coords: {
                accuracy: 0,
                altitude: null,
                altitudeAccuracy: null,
                heading: null,
                speed: null,
                longitude: 0,
                latitude: 0
            },
            error :{

            },

            timestamp: ""
        }
    });

    it("should update isRequesting state when fetchLocationRequest is dispatched", () => {

        const action = actions.fetchLocationRequestAction();

        // ACT
        const newState = mapReducer(initialState, action);

        // ASSERT
        expect(newState.isRequesting).toEqual(true);

        // initialState is untouched
        expect(initialState.isRequesting).toEqual(false);
    });

    it("should update coord and timestamp when fetchLocationSuccess is dispatched", () => {
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

        const action = actions.fetchLocationSuccessAction(payload);

        // ACT
        const newState = mapReducer(initialState, action);

        // ASSERT
        expect(newState.isRequesting).toEqual(false);
        expect(newState.coords).toBeDefined();
        expect(newState.timestamp).toBeDefined();
        expect(newState.timestamp).toMatch(/[0-9]+/);
    });

    it("should update error object when fetchLocationFailedAction is dispatched", () => {
        const payload = {
            code: 1,
            message: "Permission Denied"
        };

        const action = actions.fetchLocationFailedAction(payload);

        // ACT
        const newState = mapReducer(initialState, action);

        // ASSERT
        expect(newState.isRequesting).toEqual(false);
        expect(newState.error).toBeDefined();
        expect(newState.error).toMatchObject(payload);
        expect(newState.error.code).toEqual(payload.code);
        expect(newState.error.message).toEqual(payload.message);
    });
});