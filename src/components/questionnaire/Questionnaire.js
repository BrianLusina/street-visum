/**
 * @author lusinabrian on 10/11/17.
 * @notes: Questionnaire component that will contain quesionnaire form
 *
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, {CardContent} from "material-ui/Card"
import { withStyles } from "material-ui/styles";

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
});


class Questionnaire extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        const { classes } =  this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>

                    </CardContent>
                </Card>
            </div>
        );
    }
}

Questionnaire.propTypes = {
    myProps: PropTypes.string.isRequired
};

export default withStyles(styles)(Questionnaire)