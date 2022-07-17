import React from "react";
import MealItem from "./Mealitem";
const Meal = () => {
    return(
        <>
           <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nulla a qui quia optio,
                         at inventore repudiandae doloremque repellat consectetur dolorem dicta ad, 
                         minima magni, laudantium iusto veritatis mollitia quisquam?</h4>
                </div>
                <div className="SearchBox">
                    <input type="search" className="search-bar" />
                </div>
                <div className="container">
                    <MealItem/>
                </div>
           </div>
        </>
    )
}

export default Meal;
