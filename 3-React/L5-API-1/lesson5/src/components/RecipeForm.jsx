import { useState } from 'react';
export default function RecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleIngredientChange = event => {
    setIngredients(event.target.value.split(','));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newRecipe = {
      id: Math.random().toString(),
      title,
      ingredients,
    };

    onAddRecipe(newRecipe);

    setTitle('');
    setIngredients([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Ingredients (separated by commas):
        <input
          type="text"
          value={ingredients}
          onChange={handleIngredientChange}
        />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
