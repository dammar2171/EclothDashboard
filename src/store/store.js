import {configureStore} from "@reduxjs/toolkit";
import newproductReducer from "./newproductSlice";
import featuredproductReducer from "./featuredproductSlice";
const store = configureStore({
 reducer:{
    newproducts : newproductReducer,
    featuredProducts: featuredproductReducer,
 }
});

export default store;