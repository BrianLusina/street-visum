import React, {Component} from 'react';
import NavigationBar from "./common/NavigationBar";
import './styles/App.css';
import Grid from "material-ui/Grid"
import {withStyles} from "material-ui/styles";
import Questionnaire from "./components/questionnaire/Questionnaire";
import MapView from "./containers/map/MapView";


const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <MapView
                            loadingElement={<div style={{ height: `100%` }} />}
                            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyANcy8oRGjXefCSbzPaqo_p3AzhFVrRHEo&v=3.exp&libraries=geometry,drawing,places"}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Questionnaire myProps={"me"}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default withStyles(styles)(App);
