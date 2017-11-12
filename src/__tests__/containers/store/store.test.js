import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../../../reducers/rootReducer';
import appState from '../../../reducers/initialState';
import mapState from "../../../containers/map/initialState";
import * as mapActions from '../../../containers/map/mapActionCreator';


const setupStore = () => {
    let initialState = Object.assign({}, appState, {map : mapState});
    return createStore(rootReducer, initialState);
};

describe("Redux Store and map Actions", () => {
    let store;

    beforeEach(() => {
        store = setupStore();
    });

    it("should handle fetchLocationRequestAction", function () {
        // act
        const fetchLocationAction = mapActions.fetchLocationRequestAction();
        store.dispatch(fetchLocationAction);

        const actualIsRequesting = store.getState().map.isRequesting;

        // assert
        const expectedValue = true;

        expect(actualIsRequesting).toEqual(expectedValue);
    });

    it("should handle fetchLocationFailedAction", function () {
        const payload ={
            code: 3,
            message: "Timeout"
        };

        // act
        const fetchLocationAction = mapActions.fetchLocationFailedAction(payload);
        store.dispatch(fetchLocationAction);

        const actualIsRequesting = store.getState().map.isRequesting;
        const actualErrorCode = store.getState().map.error.code;
        const actualErrorMessage = store.getState().map.error.message;

        // assert
        const expectedValue = false;
        const expectedErrorCode = payload.code;
        const expectedErrorMessage = payload.message;

        expect(actualIsRequesting).toEqual(expectedValue);
        expect(actualErrorCode).toEqual(expectedErrorCode);
        expect(actualErrorMessage).toEqual(expectedErrorMessage);
    });

    it("should handle fetchLocationFailedAction", function () {
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

        // act
        const fetchLocationAction = mapActions.fetchLocationSuccessAction(payload);
        store.dispatch(fetchLocationAction);

        const actualIsRequesting = store.getState().map.isRequesting;
        const actualCoords = store.getState().map.coords;
        const actualTimestamp = store.getState().map.timestamp;

        // assert
        const expectedValue = false;
        const expectedCoords = payload.coords;
        const expectedTimestamp = payload.timestamp;

        expect(actualIsRequesting).toEqual(expectedValue);
        expect(actualCoords).toMatchObject(expectedCoords);
        expect(actualTimestamp).toEqual(expectedTimestamp);
        expect(actualTimestamp).toMatch(/[0-9]+/);
    });
});