import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing,module';
import { SharedModule } from '../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { recipeReducers } from './store/recipe.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from './store/recipe.effects';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipesItemComponent,
    RecipesListComponent,
    RecipesDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
    StoreModule.forFeature('recipes', recipeReducers),
    EffectsModule.forFeature([RecipeEffects])
  ]

})
export class RecipesModule {}
