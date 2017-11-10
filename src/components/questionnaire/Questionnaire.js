/**
 * @author lusinabrian on 10/11/17.
 * @notes: Questionnaire component that will contain quesionnaire form
 *
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, {CardContent} from "material-ui/Card"
import {withStyles} from "material-ui/styles";
import TextField from 'material-ui/TextField';
import {FormControl} from "material-ui/Form";
import Select from "material-ui/Select";
import Input, {InputLabel} from "material-ui/Input";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid"


const styles = theme => ({
    card: {
        minWidth: 275,
    },

    button: {
        margin: theme.spacing.unit,
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
        minWidth: 100,
    },
});


class Questionnaire extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="type-of-shop">
                                        Type of shop
                                    </InputLabel>
                                    <Select
                                        autowidth={true}
                                        native
                                        input={
                                            <Input id="type-of-shop"/>
                                        }>
                                        <option value=""/>
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="shop-sell-airtime">
                                        Does the shop sell airtime?
                                    </InputLabel>
                                    <Select
                                        native
                                        input={
                                            <Input id="shop-sell-airtime"/>
                                        }>
                                        <option value=""/>
                                        <option value={"yes"}>YES</option>
                                        <option value={"no"}>NO</option>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="mobile-money-available">
                                        Is mobile money available?
                                    </InputLabel>
                                    <Select
                                        native
                                        input={
                                            <Input id="mobile-money-available"/>
                                        }>
                                        <option value=""/>
                                        <option value={"yes"}>YES</option>
                                        <option value={"no"}>NO</option>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Agents Comments"
                                    type="text"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button raised color="primary"
                                        className={classes.button}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
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