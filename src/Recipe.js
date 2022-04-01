import React from "react";
import style from "./recipe.module.css";

const Recipe = (props) => {
    return (
        <div className="recipef">
            <h1>{props.title}</h1>
            <p>Calories: <b>{Math.floor(props.calories)}</b> approx.</p>
            <p>Total Weight: <b>{Math.floor(props.weight)}</b> approx.</p>
            <p>Total Time: {(props.time == 0) ?
                <b>Be First To Know</b> : 
                <b>{props.time} minutes</b>} </p>
            <ol>
                <p><b>Make Now: </b></p>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={props.image} alt="" />
        </div>
    );
}

export default Recipe;