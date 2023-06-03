import React from 'react'
import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Auxillary from '../../hoc/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props)=>{

    let attachClasses = [classes.SideDrawer, classes.Close];
    if(props.open)
    {
        attachClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Auxillary>
            <Backdrop clicked={props.closed}
            show = {props.open}/>
        <div className={attachClasses.join(" ")}>
            <div className={classes.Logo}>
            <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Auxillary>
    );
}

export default SideDrawer;
