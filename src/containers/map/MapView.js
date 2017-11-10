/**
 * @author lusinabrian on 10/11/17.
 * @notes:
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
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

    }

    /**
     * Render container component
     */
    render() {
        return (
            <GoogleMap
                loadingElement={this.props.loadingElement}
                defaultZoom={8}
                googleMapURL={this.props.googleMapURL}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <StreetViewPanorama defaultPosition={{ lat: 49.2853171, lng: -123.1119202 }}
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
    googleMapURL: PropTypes.string.isRequired,
    loadingElement: PropTypes.element.isRequired
};

/**
 * maps the state of the redux store to the MapView props
 * @param {Object} state of redux store
 * @param {Object} ownProps MapView properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
    return {
        state: state
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
        //actions: bindActionCreators(actions, dispatch)
    };
}

/**
 * Connect MapView container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default withScriptjs(withGoogleMap(connect(mapStateToProps, mapDispatchToProps)(MapView)))