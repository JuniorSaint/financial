
import * as fromCategoryReducer from '../reducers/category-reducer';
import { createFeatureSelector } from '@ngrx/store';

export const categoryState = createFeatureSelector<fromCategoryReducer.CategoryState>('category');

export const {
    selectIds,
    selectAll,
    selectEntities,
    selectTotal
} = fromCategoryReducer.categoryAdapter.getSelectors(categoryState)
