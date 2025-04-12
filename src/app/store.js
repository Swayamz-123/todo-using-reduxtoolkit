import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer:todoReducer
})   // a store is created
// create store  , create reducer