import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import AccountCircle from "material-ui-icons/AccountCircle";
import Menu, {MenuItem} from "material-ui/Menu";
import IconButton from "material-ui/IconButton";
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        marginTop: 0,
        width: '100%',
    },
    flex: {
        flex: 1,
    },
});


/**
 * navigationBar stateless component
 */
const NavigationBar = ({classes, anchorEl, handleMenu, handleRequestClose}) => {
    const open = Boolean(anchorEl);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        StreetView
                    </Typography>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        color="contrast"
                        onClick={handleMenu}>
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}>
                        <MenuItem onClick={handleRequestClose}>Profile</MenuItem>
                        <MenuItem onClick={handleRequestClose}>My Account</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
};

/**
 * Prop validation
 */
NavigationBar.propTypes = {
    classes: PropTypes.object.isRequired,
    anchorEl: PropTypes.object.isRequired,
    handleMenu: PropTypes.func.isRequired,
    handleRequestClose : PropTypes.func.isRequired
};

export default withStyles(styles)(NavigationBar);