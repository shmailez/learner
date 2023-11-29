import { configureStore } from "@reduxjs/toolkit";
import learnReducer from './slices/LearnListSlice'

const store = configureStore({
    reducer: {
        learnlisr: learnReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch