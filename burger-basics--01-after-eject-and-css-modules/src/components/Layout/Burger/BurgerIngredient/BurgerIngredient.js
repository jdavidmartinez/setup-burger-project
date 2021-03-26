import React from 'reac';

import clasess from './burgerIngredient.css'
const burgerIngredient = (props) =>{
    let ingredient = null;

    switch (props.type){
        case ('bread-bottom'):
            ingredient = <div className={clasess.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient= (
                <div className={clasess.BreadTop}>
                    <div className={clasess.seeds1}></div>
                    <div className={clasess.seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient= <div className={clasess.Meat}></div>;
            break;
        case ('cheese'):
            ingredient= <div className={clasess.Cheese}></div>;
            break;
        case('salad'):
            ingredient= <div className={clasess.Salad}></div>;
            break;
        case ('bacon'):
            ingredient= <div className={clasess.Bacon}></div>
    }
};

export default burgerIngredient;