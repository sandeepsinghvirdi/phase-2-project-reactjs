import React from "react";
import MealItem from "./Mealitem";
import Recipeindex from "./Recipeindex";
import { useEffect } from "react";
import { useState } from "react";

const Meal = () => {
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);
    const [search,setSearch] = useState("");
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
          console.log(data.meals); 
          setItem(data.meals);    
          setShow(true);
        })
    },[url])

    const setIndex=(alpha) => {
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe = (evt) => {
        if(evt.key==="Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
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
                    <input type="search" className="search-bar" 
                    onChange = {e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
                </div>
                <div className="container">
                   
                    
                    {
                        show ?  <MealItem data = {item}/> : "Not Found"
                    }
                </div>
                <div className="indexContainer">
                    <Recipeindex alphaIndex={(alpha) => setIndex(alpha)}/>
                </div>

           </div>
        </>
    )
}

export default Meal;
