import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from "./Burger.module.css";
import { useEffect } from 'react';

const Burger=(props)=>{

    let transformIngredient = Object.keys(props.ingredients)
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])]
        .map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey}/>;
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    
    if (transformIngredient.length === 0) {
        transformIngredient = <p className={classes.p}>Please start adding ingredients!</p>
    }
    
    return(
        <div className={classes.Burger}>
       <BurgerIngredient type="bread-top"/>
        {transformIngredient} 
       <BurgerIngredient type="bread-bottom"/>
       </div>
    );
}

export default Burger;