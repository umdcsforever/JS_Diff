import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as RecipeActions from '../store/recipe.actions';
import * as fromRecipe from '../store/recipe.reducers';

import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipeState: Observable<fromRecipe.State>;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRecipe.FeatureState> ) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // this.recipe = this.recipeService.getRecipe(this.id);
      this.recipeState = this.store.select('recipes');
    });
  }

  sendItemsToSL() {
    // this.slService.addIngredients(this.recipe.ingredients);
    this.store.select('recipes').pipe(
      take(1)
    ).subscribe((recipeState: fromRecipe.State) => {
      this.store.dispatch(
        new ShoppingListActions.AddIngredients(
          recipeState.recipes[this.id].ingredients
        )
      );
    });
  }

  onEditRecipe() {
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route} )
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  deleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
