import React from 'react';

import clasess from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = () => {

    return (
        <div className={clasess.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;