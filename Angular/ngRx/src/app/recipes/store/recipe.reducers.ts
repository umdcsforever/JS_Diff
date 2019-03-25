import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe(
      'Korean Fried Chicken',
      '양념 치킨',
      'https://i.pinimg.com/originals/0d/69/8e/0d698e153d448897d7bff67c112776e6.jpg',
      [
        new Ingredient('Meat' , 1),
        new Ingredient('French Fries' , 20)
      ]),
    new Recipe(
      'Pad Thai',
      'Fucking Delicious Thai Food',
      'https://3k0j0647ji3n23p72y2u5n65-wpengine.netdna-ssl.com/wp-content/uploads/2011/07/pad-thai.jpg',
      [
        new Ingredient('Buns' , 2),
        new Ingredient('Meat' , 1)
      ])
  ]
};

export function recipeReducers(state= initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipeActions.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case RecipeActions.DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
