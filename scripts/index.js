function createRecipeCard(recipe) {
  const recipeDiv = document.createElement('div');
  recipeDiv.classList.add('recipe');

  const recipeImg = document.createElement('img');
  recipeImg.src = recipe.image;
  recipeImg.alt = recipe.name;
  recipeDiv.appendChild(recipeImg);

  const recipeName = document.createElement('h3');
  recipeName.textContent = recipe.name;
  recipeDiv.appendChild(recipeName);

  // Add more elements as needed

  return recipeDiv;
}

function displayRecipes(recipes) {
  const searchResults = document.querySelector('.recipes-card-container');
  searchResults.innerHTML = '';

  recipes.forEach((recipe) => {
    const recipeCard = createRecipeCard(recipe);
    searchResults.appendChild(recipeCard);
  });
}

// Usage
displayRecipes(recipes);