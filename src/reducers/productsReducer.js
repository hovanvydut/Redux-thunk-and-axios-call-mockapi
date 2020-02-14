import * as types from "../constants/ActionType";

let initialState = [];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return action.products;
        case types.DELETE_PRODUCT:
            return state.filter(product => product.id !== action.id);
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case types.UPDATE_PRODUCT:
            let idx = state.findIndex(
                product => product.id === action.product.id
            );
            state[idx] = action.product;
            return [...state];
        default:
            return [...state];
    }
};

export default productReducer;
