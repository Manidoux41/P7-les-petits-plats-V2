const searchInput = document.querySelector('#search-plate');
const searchResults = document.querySelector('.recipes-card-container');

let dataArray;
/**
 * Creates a recipe card based on the provided recipe object.
 *
 * @param {Object} recipe - The recipe object containing information about the recipe.
 * @return {HTMLElement} - The created recipe card element.
 */
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


/**
 * Display the recipes in the search results.
 *
 * @param {Array} recipes - The array of recipes to display.
 * @return {undefined} This function does not return a value.
 */
function displayRecipes(recipes) {
    searchResults.innerHTML = "";

    dataArray = orderList(recipes);
    for (let index = 0; index < recipes.length; index++) {
        const recipe = recipes[index];
        const recipeCard = createRecipeCard(recipe);
        searchResults.appendChild(recipeCard);
    }    
}

displayRecipes(recipes);

/**
 * Sorts the given data array in ascending order based on the name property.
 *
 * @param {Array} data - The array of objects to be sorted.
 * @return {Array} The sorted array.
 */
function orderList(data) {
    const orderedData = data.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }

        return 0;
    })
    return orderedData;
}

// Usage

/**
 * Searches the recipes based on the provided input value and displays the filtered results.
 *
 * @param {Event} e - The event object that triggered the search.
 * @return {void} This function does not return a value.
 */
function searchRecipes(e) {
    const value = e.target.value.toLowerCase();
    const filteredData = dataArray.filter((data) => {
        return data.name.toLowerCase().includes(value);
    });
    if(value === "") {
        displayRecipes(recipes);
    } else {
        displayRecipes(filteredData);
    }
}

searchInput.addEventListener('input', searchRecipes);