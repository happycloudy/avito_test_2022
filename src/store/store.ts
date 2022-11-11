import {configureStore} from '@reduxjs/toolkit'
import {hackerNewsApi} from "../services/api";

export const store = configureStore({
    reducer: {
        [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(hackerNewsApi.middleware),
})