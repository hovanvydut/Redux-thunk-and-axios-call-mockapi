import * as types from "./../constants/ActionType";

let initialState = {};

const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCT:
            return action.product;
        default:
            return { ...state };
    }
};

export default editReducer;
