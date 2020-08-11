import { Injectable } from '@angular/core';
import { recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes : recipe[] = [{
    id : "r1",
    title : "Cat",
    imageUrl : "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
    ingredints : ['Mouse', 'Meet' , 'Milk']

  },
  {
    id : "r2",
    title : "Fruits",
    imageUrl : "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
    ingredints : ['Plans', 'Water', 'Sunlights'] 
    },
    {
      id : "r3",
      title : "Pool",
      imageUrl : "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
      ingredints : ['Ball' , 'Sticks', 'Chock']
    }
]

  constructor() { }

  getAllRecipes()
  {
    return  [...this.recipes];
  }

  getRecipe(recipeId : string)
  {
    return{
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      }),
    };
  }
  deleteRecipe(recipeId : string)
  {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
}
