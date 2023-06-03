import React from 'react'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DraweToggler from "./DrawerToggler/DrawerToggler";

const Toolbar = (props)=> (
    <header className={classes.Toolbar}>

    <DraweToggler clicked = {props.drawerToggler}/>
    <div className={classes.Logo}>
    <Logo/>
    </div>
    <nav className={classes.DisplayOnly}>
        <NavigationItems/>
    </nav>

    </header>
);

export default Toolbar