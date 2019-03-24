import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    // const header = new HttpHeaders().set('Authorization', 'Bearer ');

    // return this.httpClient
    //   .put('https://ng-http-ecff4.firebaseio.com/recipes.json',
    //     this.recipeService.getRecipes(), {
    //       observe: 'body',
    //       params: new HttpParams().set('auth', token)
    //       // headers: header
    //     }
    //   );

    // Progress
    const req = new HttpRequest(
      'PUT',
      'https://ng-http-ecff4.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        // super useful for uploading and downloading
        reportProgress: true
        // params: new HttpParams().set('auth', token)
      }
    );

    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>('https://ng-http-ecff4.firebaseio.com/recipes.json?auth=' + token)
    .pipe(map(
      (recipes) => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }

}
