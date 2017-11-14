import React, {Component} from 'react';
import NavigationBar from "./common/NavigationBar";
import './styles/App.css';
import Grid from "material-ui/Grid"
import {withStyles} from "material-ui/styles";
import Questionnaire from "./containers/questionnaire/Questionnaire";
import MapView from "./containers/map/MapView";
import Snackbar from "material-ui/Snackbar";
import CloseIcon from "material-ui-icons/Close"
import IconButton from "material-ui/IconButton"
import {connect} from "react-redux";
import Card, {CardContent} from "material-ui/Card"


require("dotenv").config();

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    }
});

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            snackBarOpen: false,
            snackBarMsg: "",
            menuAnchorEl: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.handleMenuRequestClose = this.handleMenuRequestClose.bind(this);
        this.handleSnackbarRequestClose = this.handleSnackbarRequestClose.bind(this);
    }

    handleChange(event, checked) {
        this.setState({
            auth: checked
        })
    }

    /**
     * Handles Menu open interactions
     * @param {Object} event Event object
     * */
    handleMenu(event) {
        this.setState({
            menuAnchorEl: event.currentTarget
        })
    }

    /**
     * Closes the menu from the Account circle in Navigation
     * */
    handleMenuRequestClose() {
        this.setState({
            menuAnchorEl: null
        })
    }

    handleSnackbarRequestClose(event, reason) {
        if (reason === "clickaway") {
            return
        }

        this.setState({
            snackBarOpen: false
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.success) {
            this.setState({
                snackBarOpen: true
            });
        } else {
            this.setState({
                snackBarOpen: true
            });
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <NavigationBar
                    anchorEl={this.state.menuAnchorEl}
                    handleMenu={this.handleMenu}
                    handleRequestClose={this.handleMenuRequestClose}
                />
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12} sm={6}>
                        <MapView
                            loadingElement={<div style={{height: `100%`}}/>}
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                            containerElement={<div style={{height: `400px`}}/>}
                            mapElement={<div style={{height: `100%`}}/>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Questionnaire/>
                    </Grid>
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.snackBarOpen}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={
                        <span id="message-id">
                            {this.props.success ? "Form submitted" : "Could not submit form"}
                        </span>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleSnackbarRequestClose}>
                            <CloseIcon/>
                        </IconButton>,
                    ]}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isSubmitting: state.questionnaire.isSubmitting,
        success: state.questionnaire.success,
        error: state.questionnaire.error
    };
}

export default withStyles(styles)(connect(mapStateToProps)(App));
