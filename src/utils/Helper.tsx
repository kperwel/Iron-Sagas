import { FAS } from '../actions/FluxStandardAction';

export const fromRecipes = (recipes: any) => (draft: any, action: FAS) => {
    if (recipes.hasOwnProperty(action.type)) {
        recipes[action.type](draft, action);
    }
};