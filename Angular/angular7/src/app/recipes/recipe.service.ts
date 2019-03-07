import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'a test1',
      'testing desc',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      [
        new Ingredient('Meat' , 1),
        new Ingredient('French Fries' , 20),
      ]),
    new Recipe(
      'a test2',
      'testing desc',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      [
        new Ingredient('Buns' , 2),
        new Ingredient('Meat' , 1),
      ])
  ];

  recipeSelected = new EventEmitter<Recipe>();


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
