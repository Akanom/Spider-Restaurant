import { createStore } from "redux";
import rootReducers from "./reducer";
//  import { configureStore } from "@reduxjs/toolkit";

const store = createStore(rootReducers)

export default store


// export const store=configureStore({
//     reducer:{
//         rootReducers
//     }
// })
