import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Korean Fried Chicken',
      '양념 치킨',
      'https://i.pinimg.com/originals/0d/69/8e/0d698e153d448897d7bff67c112776e6.jpg',
      [
        new Ingredient('Meat' , 1),
        new Ingredient('French Fries' , 20),
      ]),
    new Recipe(
      'Pad Thai',
      'Fucking Delicious Thai Food',
      'https://3k0j0647ji3n23p72y2u5n65-wpengine.netdna-ssl.com/wp-content/uploads/2011/07/pad-thai.jpg',
      [
        new Ingredient('Buns' , 2),
        new Ingredient('Meat' , 1),
      ])
  ];

  // recipeSelected = new EventEmitter<Recipe>();

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
