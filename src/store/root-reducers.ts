import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { api } from './api/api';
import { messageSlice } from "./message/message.slice";


const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    message: messageSlice.reducer
})




export default rootReducer;