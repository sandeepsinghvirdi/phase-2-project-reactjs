
import './App.css';
import Meal from './Components/Meal';
import './Components/style.css';
import {Routes, Route} from "react-router-dom";
import RecipeInfo from './Components/Recipeinfo';

function App() {
  return(
    <>  
      <Routes>
        <Route path="/" element={<Meal/>}/>
        <Route path="/:MealId" element={<RecipeInfo/>}></Route>
      </Routes>
    </>
  )
}
export default App;
