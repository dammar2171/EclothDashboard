import {configureStore} from "@reduxjs/toolkit";
import newproductReducer from "./newproductSlice";
import featuredproductReducer from "./featuredproductSlice";
import costumerReducer from "./customerSlice";
const store = configureStore({
 reducer:{
    newproducts : newproductReducer,
    featuredProducts: featuredproductReducer,
    costumers: costumerReducer,
 }
});

export default store;