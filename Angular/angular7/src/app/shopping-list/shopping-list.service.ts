import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 3),
    new Ingredient('Orange', 4),
  ];
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ings: Ingredient[]) {
    this.ingredients.push(...ings);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredent(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
