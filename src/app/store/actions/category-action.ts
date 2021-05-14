import { Action } from "@ngrx/store";
import { CategoryInterface } from "src/app/core/category/category-shared/category-interface";



export enum CategoryActionTypes{

    CATEGORY_ALL = '[PERSON_GET] list all category',
    CATEGORY_NEW = '[CATEGORY_NEW] add a new category',
    CATEGORY_UPDATE = '[CATEGORY_UPDATE] update a category',
    CATEGORY_DELETE = '[CATEGORY_DELETE] delete a category',
}

export class CategoryAll implements Action {
    readonly type = CategoryActionTypes.CATEGORY_ALL;
}

export class CategoryNew implements Action {
    readonly type = CategoryActionTypes.CATEGORY_NEW;
    constructor( public payload: { category: CategoryInterface}){}
}

export class CategoryUpdate implements Action {
    readonly type = CategoryActionTypes.CATEGORY_UPDATE;
    constructor( public payload: {_id: string, changes: Partial<CategoryInterface>}){}
}

export class CategoryDelete implements Action {
    readonly type = CategoryActionTypes.CATEGORY_DELETE;
    constructor ( public payload: {_id: string }){}
}

export type CategoryAction = CategoryAll |  CategoryNew | CategoryUpdate | CategoryDelete;