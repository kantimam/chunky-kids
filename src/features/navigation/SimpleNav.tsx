import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Switch/* , Link */ } from '@material-ui/core';
import RouterLink from './RouterLink';
//import { Link as RouterLink } from 'react-router-dom';

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
        /* link: {
            color: theme.palette.secondary
        } */
    }),
);

interface Props {
    isDark: boolean,
    toggleDark(): any
}

const SimpleNav = ({ isDark, toggleDark }: Props) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <RouterLink className={classes.menuButton} to="/">
                    home
                </RouterLink>
                <RouterLink className={classes.menuButton} to="/create">
                    create
                </RouterLink>

                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Switch onChange={toggleDark} checked={isDark} />
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default SimpleNav