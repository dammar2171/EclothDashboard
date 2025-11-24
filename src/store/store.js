import {configureStore} from "@reduxjs/toolkit";
import newproductReducer from "./newproductSlice";
import featuredproductReducer from "./featuredproductSlice";
import costumerReducer from "./customerSlice";
import loginReducer from "./loginSlice";
const store = configureStore({
 reducer:{
    newproducts : newproductReducer,
    featuredProducts: featuredproductReducer,
    costumers: costumerReducer,
    login: loginReducer,
 }
});

export default store;