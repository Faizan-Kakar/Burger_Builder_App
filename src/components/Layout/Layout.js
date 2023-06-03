import React, { Component } from 'react';
import Auxillary from "../hoc/Auxillary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toobar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends Component{
    state = {
        showSideDrawer : false,
    }

    closedBackdropHandler=()=>{
           this.setState({showSideDrawer : false}) 
    }

    showSidedrowerHandler = ()=>{
        this.setState({showSideDrawer : true})
    }

    render(){

        return(
    <Auxillary>
        <SideDrawer
        closed={this.closedBackdropHandler}
        open = {this.state.showSideDrawer}/>
        <Toolbar drawerToggler = {this.showSidedrowerHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Auxillary>
        );

}}

export default Layout;