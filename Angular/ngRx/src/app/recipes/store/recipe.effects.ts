import { Effect, Actions, ofType } from '@ngrx/effects';

import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as RecipeActions from '../store/recipe.actions';
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$.pipe(
    ofType(RecipeActions.FETCH_RECIPES),
    switchMap((action: RecipeActions.FetchRecipes) => {
      // const token = this.authService.getToken();
      return this.httpClient.get<Recipe[]>('https://ng-http-ecff4.firebaseio.com/recipes.json');
    }),
    map(
      (recipes) => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    )
  );

  @Effect({dispatch: false})
  recipeStore = this.actions$.pipe(
    ofType(RecipeActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([action, state]) => {
      const req = new HttpRequest(
        'PUT',
        'https://ng-http-ecff4.firebaseio.com/recipes.json',
        state.recipes,
        {
          // super useful for uploading and downloading
          reportProgress: true
          // params: new HttpParams().set('auth', token)
        }
      );

      return this.httpClient.request(req);
    })
  );

  constructor(private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromRecipe.FeatureState>) {}
}
