import { useState } from 'react';
import RecipeForm from './RecipeForm';
export default function Broken() {
  const [recipes, setRecipes] = useState([]);

  // ? Arrays are complex datatypes
  // * They can not updating using their own state variable

  const addRecipe = newRecipe => {
    setRecipes(prev => {
      return [...prev, newRecipe];
    });
  };
  console.log(recipes);
  return (
    <div>
      <h1>Recipe List</h1>
      <RecipeForm onAddRecipe={addRecipe} />
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
