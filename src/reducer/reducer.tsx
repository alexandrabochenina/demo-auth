import { createSlice } from '@reduxjs/toolkit'

type TAuthState = {
  isAuthChecked: boolean,
  accessToken: string,
  refreshToken: string
}

const initialState: TAuthState = {
    isAuthChecked: false,
    accessToken: '',
    refreshToken: ''
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logIn: (state) => {
        state.isAuthChecked = true;
      },
      logOut: (state) => {
        state.isAuthChecked = false;
      },
    }
  })

export const {logIn,logOut} = authSlice.actions
export const reducer = authSlice.reducer