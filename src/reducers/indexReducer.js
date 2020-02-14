import { combineReducers } from "redux";
import products from "./productsReducer";
import editProduct from "./editReducer";

const myReducer = combineReducers({ products, editProduct });

export default myReducer;
