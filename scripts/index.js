function createRecipeCard(recipe) {
    const recipeCard = document.createElement('div');
    recipeCard.setAttribute('class', 'recipe-card');
    const fileName = './assets/photos/';
    recipeCard.innerHTML = `
            <div class="picture-info">
                <img src=${fileName}${recipe.image} alt=${recipe.name}>
                <p class="prep-time">${recipe.time}min</p>
            </div>
            <div class="recipe">
                <h2 class="recipes-name">${recipe.name}</h2>
                <div class="preparation">
                    <h3 class="title">Recette</h3>
                    <p>${recipe.description.substring(0, 180)}${recipe.description.length > 180 ? "..." : ""
                    }</p>
                    </div>
                    <div class="ingredients">
                    <h3 class="title">Ingrédient</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => {

                    if (ingredient.quantity !== undefined && ingredient.unit !== undefined) {
                        return `<li>
                                        <p>${ingredient.ingredient}</p>
                                        <span>${ingredient.quantity} ${ingredient.unit}</span>
                                    </li>`;
                    } else if (ingredient.quantity !== undefined) {
                        return `
                                            <li>
                                                <p>${ingredient.ingredient}</p>
                                                <span>${ingredient.quantity}</span>
                                            </li>
                                        `
                    }
                    }).join('')}
                            </ul>
                        </div>
                    </div>
            `;


    return recipeCard;  
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