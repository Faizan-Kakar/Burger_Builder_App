import React from 'react'
import Auxillary from '../../hoc/Auxillary';
import Button from '../../UI/Backdrop/Button/Button';

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=>{
        return <li key={igKey}>
            <span style={{textTransform : 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
            </li>
    })

    return(
        <Auxillary>
            <h2>Order Summary</h2>
            <p>A delicious burger with following burger</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked = {props.purchaseCanceled} >CANCEL</Button>
            <Button btnType="Success" clicked = {props.purchaseContinue}>CONTINUE</Button>
        </Auxillary>
    );
} 

export default OrderSummary;