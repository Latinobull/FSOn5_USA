import { useState } from 'react';
import RecipeForm from './RecipeForm';
export default function Broken() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = newRecipe => {
    setRecipes(prev => {
      return [prev, recipes];
    });
  };

  return (
    <div>
      <h1>Recipe List</h1>
      <RecipeForm onAddRecipe={addRecipe} />
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.Title}</h2>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
