import * as fromShoppnigList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState {
  shoppingList: fromShoppnigList.State;
  auth: fromAuth.State;
}
