import { createSlice } from '@reduxjs/toolkit';

const loadAuthState = () => {
  const authStateInStorage = window.localStorage.getItem('authState');
  if (authStateInStorage === null) {
    return {
      auth: false,
      user: null,
    };
  }
  return JSON.parse(authStateInStorage);
};
const savedAuthState = loadAuthState();

const authSlice = createSlice({
  initialState: savedAuthState,
  name: 'auth',
  reducers: {
    signin: (state, action) => {
      const user = action.payload;
      return {
        ...state,
        auth: true,
        user: user,
      };
    },
    signout: (state) => {
      return {
        ...state,
        auth: false,
        user: null,
      };
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
