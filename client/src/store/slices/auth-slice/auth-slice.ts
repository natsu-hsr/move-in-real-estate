import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {AuthState} from './auth-slice-types'
import {registerUser} from './auth-slice-thunks';

const initialState: AuthState = {
  isAuthorized: false,
  error: undefined,
};

export const authSliceState = 'auth';

export const authSlice = createSlice({
  name: authSliceState,
  initialState,
  reducers: {
    setAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state) => {
      if (state.error) {
        state.error = undefined;
      }
    })
    builder.addCase(registerUser.rejected, (state, {payload}) => {
      state.error = payload?.message;
    })
  },
})

// Action creators are generated for each case reducer function
export const {setAuthorized} = authSlice.actions

export const authSliceReducer = authSlice.reducer;