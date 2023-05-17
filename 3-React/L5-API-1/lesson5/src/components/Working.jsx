import RecipeForm from './RecipeForm';
import { useState } from 'react';
export default function Working() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = recipe => {
    setRecipes(prev => {
      return [...prev, recipe];
    });
  };

  console.log();

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
