/**
 * @author lusinabrian on 12/11/17.
 * @notes:
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from "./questionnaireActions";
import Card, {CardContent} from "material-ui/Card"
import {withStyles} from "material-ui/styles";
import TextField from 'material-ui/TextField';
import {FormControl} from "material-ui/Form";
import Select from "material-ui/Select";
import {InputLabel} from "material-ui/Input";
import Button from "material-ui/Button";
import { MenuItem } from "material-ui/Menu";
import Grid from "material-ui/Grid"


const styles = theme => ({
    card: {
        minWidth: 270,
        //maxWidth:400
    },

    button: {
        margin: theme.spacing.unit,
        width: "-webkit-fill-available",
        display:"block"
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
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 200,
        width: "-webkit-fill-available"
    },
});


/**
 * Questionnaire container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class Questionnaire extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            shop: "",
            airtime: "",
            mobileMoney: "",
            agentsComments:""
        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleSelectChange = name => event => {
        const target = event.target;

        this.setState({ [name]: target.value });
    };

    handleFormSubmit(event){
        this.props.actions.submitQuestionnaire(this.state);
        event.preventDefault()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.success){
            this.setState(prevState =>{
                return Object.assign({}, prevState, {
                        shop: "",
                        airtime: "",
                        mobileMoney: "",
                        agentsComments:""
                    }
                )
            });
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <form onSubmit={this.handleFormSubmit}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="type-of-shop">Type of shop</InputLabel>
                                    <Select
                                        name="shop"
                                        value={this.state.shop}
                                        onChange={this.handleSelectChange("shop")}>
                                        <MenuItem value=""/>
                                        <MenuItem value="retail">Retail</MenuItem>
                                        <MenuItem value="kiosk">Kiosk</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="shop-sell-airtime">
                                        Does the shop sell airtime?
                                    </InputLabel>
                                    <Select
                                        name="airtime"
                                        value={this.state.airtime}
                                        onChange={this.handleSelectChange("airtime")}>
                                        <MenuItem value=""/>
                                        <MenuItem value="yes">YES</MenuItem>
                                        <MenuItem value="no">NO</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="mobile-money-available">
                                        Is mobile money available?
                                    </InputLabel>
                                    <Select
                                        name="mobileMoney"
                                        onChange={this.handleSelectChange("mobileMoney")}
                                        value={this.state.mobileMoney}>
                                        <MenuItem value=""/>
                                        <MenuItem value="yes">YES</MenuItem>
                                        <MenuItem value="no">NO</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    autoFocus
                                    name="agentsComments"
                                    margin="dense"
                                    id="agentsComments"
                                    label="Agents Comments"
                                    type="text"
                                    onChange={this.handleSelectChange("agentsComments")}
                                    fullWidth
                                    value={this.state.agentsComments}/>
                            </Grid>

                            <Grid item xs={12}>
                                <Button raised color="primary"
                                        className={classes.button}
                                        type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </form>
        );
    }
}

/**
 * Validates QuestionnaireV prop types
 */
Questionnaire.propTypes = {};

/**
 * maps the state of the redux store to the QuestionnaireV props
 * @param {Object} state of redux store
 * @param {Object} ownProps QuestionnaireV properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
    return {
        isSubmitting: state.questionnaire.isSubmitting,
        success: state.questionnaire.success,
        error: state.questionnaire.error
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
 * Connect QuestionnaireV container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Questionnaire))