function getRecipes() {

    let recipesArray = [];

    recipesArray = recipes.filter((recipe) =>{
        console.log(recipe);
    })
}

function init(){
    getRecipes();
}

init();