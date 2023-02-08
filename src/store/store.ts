import { configureStore } from "@reduxjs/toolkit";


import { api } from "./api/api";
import { rtkQueryErrorLogger } from "./middleware/error.middleware";
import rootReducer from "./root-reducers";



export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat(rtkQueryErrorLogger).concat(api.middleware)
})




export type TypeRootState = ReturnType<typeof rootReducer> 