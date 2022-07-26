import React, { useState } from "react";
import { useParams } from "react-router-dom";

const RecipeInfo = () => {
    const [item, setItem ] = useState();
    const {MealId} = useParams();
    if(MealId!=="")
    {
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res => res.json())
        .then(data => {
            setItem(data.meals[0]);
        })
    }
    return(
        <>
            {
                (!item)?"":(
                <>
                    <div className="content">
                    <img src={item.strMealThumb} alt="" />
                    <div className="inner-content">
                        <h1>{item.strMeal}</h1>
                        <h2>{item.strArea} Food</h2>
                        <h3>Category {item.strCategory}</h3>
                    </div>
                    </div>
                    <div className="recipe-details">
                        <div className="ingredients">
                            <h2>Ingredients</h2><br/>
                                <h2>{item.strIngredient1}: {item.strMeasure1}</h2>
                                <h2>{item.strIngredient2}: {item.strMeasure2}</h2>
                                <h2>{item.strIngredient3}: {item.strMeasure3}</h2>
                                <h2>{item.strIngredient4}: {item.strMeasure4}</h2>
                                <h2>{item.strIngredient5}: {item.strMeasure5}</h2>
                                <h2>{item.strIngredient6}: {item.strMeasure6}</h2>
                                <h2>{item.strIngredient7}: {item.strMeasure7}</h2>
                                <h2>{item.strIngredient8}: {item.strMeasure8}</h2>
                                <h2>{item.strIngredient9}: {item.strMeasure9}</h2>
                                <h2>{item.strIngredient10}: {item.strMeasur10}</h2>
                                <h2>{item.strIngredient11}: {item.strMeasure11}</h2>
                                <h2>{item.strIngredient12}: {item.strMeasure12}</h2>
                                <h2>{item.strIngredient13}: {item.strMeasure13}</h2>
                                <h2>{item.strIngredient14}: {item.strMeasure14}</h2>
                                <h2>{item.strIngredient15}: {item.strMeasure15}</h2>
                                <h2>{item.strIngredient16}: {item.strMeasure16}</h2>
                                <h2>{item.strIngredient17}: {item.strMeasure17}</h2>
                                <h2>{item.strIngredient18}: {item.strMeasure18}</h2>
                        </div>

                    <div className="instructions">
                        <h2>Instructions</h2><br/><br/><br/>
                        <h4>{item.strInstructions}</h4>
                    </div>
                    </div>
                </>)
            }
        </>
    )
}
export default RecipeInfo;
