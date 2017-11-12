/**
 * @author lusinabrian on 10/11/17.
 * @notes: Map Container component will have the StreetView. Will obtain coordinates from redux
 * store
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from "./mapActions";
import {bindActionCreators} from 'redux';
import { withGoogleMap, withScriptjs, GoogleMap, StreetViewPanorama } from "react-google-maps";

/**
 * MapView container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class MapView extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleOnPositionChanged = this.handleOnPositionChanged.bind(this);
    }

    handleOnPositionChanged(panorama){
        console.log("Position", panorama.getPosition());
    }

    componentDidMount(){
        if(navigator.geolocation){
            // we have geolocation, we can request for user location
            this.props.actions.requestUserLocation()
        }else{
            // we do not have geolocation

        }
    }

    /**
     * Render container component
     */
    render() {
        const { latitude, longitude } = this.props.coords;

        return (
            <GoogleMap
                loadingElement={this.props.loadingElement}
                defaultZoom={8}
                googleMapURL={this.props.googleMapURL}
                defaultCenter={{ lat: latitude, lng: longitude }}>
                <StreetViewPanorama
                    defaultPosition={{ lat: latitude, lng: longitude }}
                    motionTracking={true}
                    onPositionchanged={this.handleOnPositionChanged}
                    visible>

                </StreetViewPanorama>
            </GoogleMap>
        );
    }
}

/**
 * Validates MapView prop types
 */
MapView.propTypes = {
    googleMapURL: PropTypes.string,
    loadingElement: PropTypes.element
};

/**
 * maps the state of the redux store to the MapView props
 * @param {Object} state of redux store
 * @param {Object} ownProps MapView properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
    return {
        isRequesting: state.map.isRequesting,
        coords: state.map.coords,
        timestamp: state.map.timestamp,
        error: state.map.error
    };
}

/**
 * maps dispatch actions to props in this container
 * component
 * @param {Object} dispatch
 * @returns {Object} actions object
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

/**
 * Connect MapView container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default withScriptjs(withGoogleMap(connect(mapStateToProps, mapDispatchToProps)(MapView)))