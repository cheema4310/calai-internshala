import { createSlice } from '@reduxjs/toolkit';

// get stored auth state from localstorage
const loadAuthState = () => {
  const authStateInStorage = window.localStorage.getItem('authState');
  if (authStateInStorage === null) {
    return false;
  }
  return JSON.parse(authStateInStorage);
};
const savedAuthState = loadAuthState();

// create slice for signin
const authSlice = createSlice({
  initialState: savedAuthState,
  name: 'auth',
  reducers: {
    signin(state) {
      state = true;
      window.localStorage.setItem('authState', JSON.stringify(state));
    },
    signout(state) {
      state = false;
      window.localStorage.setItem('authState', JSON.stringify(state));
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
