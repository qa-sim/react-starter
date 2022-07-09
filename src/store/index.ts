import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import rootReducer from 'store/reducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
