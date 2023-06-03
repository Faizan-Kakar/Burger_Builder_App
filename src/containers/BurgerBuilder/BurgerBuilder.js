import React, {Component} from 'react';
import Auxillary from '../../components/hoc/Auxillary';
import Burger from '../../components/Buger/Burger';
import BuildControls from '../../components/Buger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Buger/OrderSummary/OrderSummary'
import axios from '../../axios';

const INGREDIENT_PRICES = {
    salad : 0.5,
    bacon : 0.7,
    meat : 1.3,
    cheese : 0.5,
}

class BurgerBuilder extends Component {

    state={
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0,
        },
        TotalPrice : 4,
        purchaseable : false,
        purchasing : false
    }

    updatePurchaseState (ingredients){
        let sum = Object.keys(ingredients).map(igKey=> {
            return ingredients[igKey];
        }).reduce((sum, el)=>{
            return sum+el;
    },0);
        this.setState({purchaseable : sum >0})
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type]= updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.TotalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients : updatedIngredients, TotalPrice : newPrice});
        console.log(updatedIngredients[type]);
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0)
        {
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type]= updatedCount;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.TotalPrice;
        const newPrice = oldPrice - priceSubtraction;
        this.setState({ingredients : updatedIngredients, TotalPrice : newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing : true})
    }
    cancelPurchasehHandler = ()=>{
        this.setState({purchasing : false})
    }

    continuePurchaseHandler = ()=>{
        const order = {
            ingredients : this.state.ingredients,
            pice : this.state.TotalPrice,
            customer : {
                address : {
                    street : 'Stree 1',
                    sector : '1/8',
                },
                name : 'Faizan khan',
                email : 'fk8771234@gmail.com',
            }
        }
        axios.post('/orders.json',order)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo)
        {
            disabledInfo[key]= disabledInfo[key] <= 0;
        }

        return(
            <Auxillary>
                <Modal show = {this.state.purchasing} modalClosed={this.cancelPurchasehHandler}>
                  <OrderSummary 
                  ingredients = {this.state.ingredients}
                  price = {this.state.TotalPrice} 
                  purchaseCanceled = {this.cancelPurchasehHandler}
                  purchaseContinue = {this.continuePurchaseHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientAdded = {this.addIngredientsHandler}
                ingredientSubtracted = {this.removeIngredientsHandler}
                disabled = {disabledInfo} 
                purchaseable = {this.state.purchaseable}
                ordered = {this.purchaseHandler}
                price={this.state.TotalPrice}/>
            </Auxillary>
            
        );

    }
}

export default BurgerBuilder;