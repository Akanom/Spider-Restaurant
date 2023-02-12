import { legacy_createStore as createStore} from 'redux'
import rootReducers from './reducer'
// import { configureStore } from "@reduxjs/toolkit";
// import { cartReducer } from "./cartSlice";



const store = createStore(rootReducers)

export default store

