import React from 'react';
import { AppBar, Toolbar, IconButton,Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import useStyles from './styles';
import {Link,useLocation } from 'react-router-dom';

const Navbar = ( { totalItem})=>{
    const classes = useStyles();
    const location = useLocation();

    return(
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="commerce.js" height="25px" className={classes.image}/>
                    Emart
                </Typography>
                <div className={classes.grow}/>
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label="show cart item" color="inherit">
                        <Badge badgeContent={totalItem} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar