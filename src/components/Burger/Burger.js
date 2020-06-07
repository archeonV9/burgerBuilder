import React from 'react'
import styles from '../Burger/Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey] )].map(( _, i) => {
            return <Ingredient key={ingredientKey + i} type={ingredientKey}/>
        }); 
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please stop adding ingredients!</p>
    }
    console.log()
  return (
      <div className={styles.Burger}>
        <Ingredient type="bread-top"/>
            {transformedIngredients}
        <Ingredient type='bread-bottom'/>
      </div>
  );  
};

export default burger;

