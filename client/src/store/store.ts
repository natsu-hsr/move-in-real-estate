import {configureStore} from '@reduxjs/toolkit'
import {authSliceReducer} from './slices/auth-slice/auth-slice'

export const store = configureStore({
  reducer: {
    authReducer: authSliceReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch