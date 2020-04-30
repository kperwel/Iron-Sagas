import { FAS } from '../actions/FluxStandardAction';

export function fromRecipes<T>(recipes: any) {
    return (draft: T, action: FAS) => {
        if (recipes.hasOwnProperty(action.type)) {
            recipes[action.type](draft, action);
        }
    };
}