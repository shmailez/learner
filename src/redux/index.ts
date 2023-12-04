import { combineReducers, configureStore } from "@reduxjs/toolkit";
import learnReducer from './slices/LearnListSlice'
import longReducer from './slices/LongListSlice'
import storage from "redux-persist/lib/storage";
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const rootReducer = combineReducers({
    learnList: learnReducer,
    longList: longReducer
})

const resistConfig = {
    key: 'learner',
    storage
}

const persistedReducer = persistReducer(resistConfig, rootReducer);  

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
    })

export const persistor = persistStore(store);
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch