import { configureStore } from '@reduxjs/toolkit';
import createSlice from './Reducer/RootReducer'

const store = configureStore({
    reducer: createSlice
})


export default store;