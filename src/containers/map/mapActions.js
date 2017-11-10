/**
 * @author lusinabrian on 10/11/17.
 * @notes: Actions to be handles by map container, these will be passed as props to the map
 * container from bindActionCreators api from redux
 */
import { fetchLocationFailedAction, fetchLocationRequestAction, fetchLocationSuccessAction } from "./mapActionCreator";

/**
 * Requests user location user Geo Location API
 * */
export function requestUserLocation() {
    return dispatch => {
        dispatch(fetchLocationRequestAction());
        navigator.geolocation.getCurrentPosition(position => {
            console.log("pos", position);
            dispatch(fetchLocationSuccessAction(position))
        }, error => {
            dispatch(fetchLocationFailedAction(error))
        })
    }
}