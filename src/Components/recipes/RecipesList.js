import { useState } from "react"
import { FcSearch } from "react-icons/fc";
import RadioBtnComponent from "./RadioBtnComponent"
import Recipe from "./Recipe";
import './recipes.css'

const Recipes = () => {

    const apiKey = 'ffd557c43fce496b88b82a49549d528b'

    const cuisineArray = [
        {name:'american', id:1},
        {name:'british', id:2},
        {name:'chinese', id:3},
        {name:'french', id:4},
        {name:'german', id:5},
        {name:'indian', id:6},
        {name:'italian', id:7},
        {name:'japanese', id:8},
        {name:'mexican', id:9},
        {name:'spanish', id:10},
    ]

    const dietArray = [
        {name:'gluten-free', id:1},
        {name:'vegetarian', id:2},
        {name:'lacto-vegetarian', id:3},
        {name:'vegan', id:4},
    ]

    return (
        <div></div>
    )
}

export default Recipes