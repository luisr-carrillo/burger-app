import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
                {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>
                <strong>Total Price: ${props.price.toFixed(2)}</strong>
            </p>
            <p>Continue to Checkout?</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button btnType="Danger" clicked={props.purchaseCancelHandler}>
                    Cancel
                </Button>
                <Button
                    btnType="Success"
                    clicked={props.purchaseContinueHandler}
                >
                    Continue
                </Button>
            </div>
        </Auxiliary>
    );
};

export default orderSummary;