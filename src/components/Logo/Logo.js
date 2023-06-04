import React from 'react'
import classes from "./Logo.module.css"
import logopng from "../../assests/images/burgreLogo.png";

const Logo = () => (
    <div className={classes.Logo}>
        <img alt='This is the picture' src={logopng}></img>
    </div>
);

export default Logo;