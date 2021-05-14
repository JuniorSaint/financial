
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CategoryInterface } from 'src/app/core/category/category-shared/category-interface';
import * as fromCategoryAction from './../actions/category-action';

export interface CategoryState extends EntityState<CategoryInterface> {};

export const categoryAdapter: EntityAdapter<CategoryInterface> = createEntityAdapter<CategoryInterface>({
    // selectId: (c: CategoryInterface) => c._id
});

export const initialState: CategoryState = categoryAdapter.getInitialState({});

export function reducer(state = initialState, action: fromCategoryAction.CategoryAction){
    switch (action.type) {

        case fromCategoryAction.CategoryActionTypes.CATEGORY_DELETE:
            return categoryAdapter.removeOne(action.payload._id, state)

        case fromCategoryAction.CategoryActionTypes.CATEGORY_NEW:            
          return categoryAdapter.addOne(action.payload.category, state);

        case fromCategoryAction.CategoryActionTypes.CATEGORY_UPDATE:
            return categoryAdapter.updateOne({id: action.payload._id, changes: action.payload.changes}, state)

        default: 
            return state;
    }
}