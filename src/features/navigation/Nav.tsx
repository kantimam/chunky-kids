import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Switch } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
    toggleDarkMode

} from '../theme/darkModeSlice';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

interface Props {
    isDark: boolean
}

const Nav = ({ isDark }: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Switch onChange={() => dispatch(toggleDarkMode())} checked={isDark} />
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Nav
