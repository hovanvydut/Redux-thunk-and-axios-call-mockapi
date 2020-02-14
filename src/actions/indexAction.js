import * as types from "./../constants/ActionType";
import callApi from "./../utils/apiCaller";

/* Fetch All product from server then update state in store */
// thunk middleware with structure bellow:
// mission of middleware: get all products from database and pass to sendProductsToStore
export const fetchProductRequest = () => {
    return dispatch => {
        return callApi("/products", "GET", null).then(res => {
            dispatch(sendProductsToStore(res.data));
        });
    };
};
// action creator that return an action
// mission: save all products from database into store
export const sendProductsToStore = products => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    };
};

/* Delete a product */
export const deleteProductReques = id => {
    return dispatch => {
        return callApi(`products/${id}`, "DELETE", null).then(res => {
            if (res.status === 200) {
                dispatch(deleteProduct(id));
            }
        });
    };
};
export const deleteProduct = id => {
    return {
        type: types.DELETE_PRODUCT,
        id
    };
};

/* Add a product */
export const addProductMiddleware = product => {
    return dispatch => {
        return callApi("/products", "POST", product).then(res => {
            dispatch(addProduct(res.data));
        });
    };
};

export const addProduct = product => {
    return {
        type: types.ADD_PRODUCT,
        product
    };
};

/* Edit a product */
// mission: get a product with specific id from DB and save in editReducer store by dispatch sendProductEditToStore
export const getProductMiddleWare = id => {
    return dispatch => {
        return callApi(`products/${id}`, "GET", null).then(res => {
            dispatch(sendProductEditToStore(res.data));
        });
    };
};

export const sendProductEditToStore = product => {
    return {
        type: types.EDIT_PRODUCT,
        product
    };
};

/* update product */
export const saveProductUpdateInDB = product => {
    return dispatch => {
        callApi(`/products/${product.id}`, "PUT", product).then(res => {
            dispatch(updateProductInStore(res.data));
        });
    };
};
export const updateProductInStore = product => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    };
};
