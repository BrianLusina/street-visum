/**
 * @author lusinabrian on 10/11/17.
 * @notes:
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Questionnaire extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        return (
            <div>{this.props.myProps}</div>
        );
    }
}

Questionnaire.propTypes = {
    myProps: PropTypes.string.isRequired
};
