
import * as fromCategoryReducer from '../reducers/category-reducer';
import { ActionReducerMap } from '@ngrx/store';



export interface AppState {
    category: fromCategoryReducer.CategoryState;
    // user: ;
    // entry: ;    
}

export const appReducers: ActionReducerMap<AppState> = {
    category: fromCategoryReducer.reducer
}

export const selectCategory = (state: AppState) => state.category