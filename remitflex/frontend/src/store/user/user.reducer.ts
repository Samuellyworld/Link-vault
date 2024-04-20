// importing relevant module
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentUserType } from "@/types/store.types";
import { USER_ACTION_TYPES } from "./user.action";

// initial state
const initialState: CurrentUserType = {
  currentUser: null,
  bills: null
};

// setting user actions;
export const userSlice = createSlice({
  name: USER_ACTION_TYPES.SET_CURRENT_USER,
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string | null>) => {
      state.currentUser = action.payload;
    },
    setBills: (state, action: PayloadAction<Array<string> | null>) => {
      state.bills = action.payload;
    }
  }
});

// dispatch
export const { setCurrentUser, setBills } = userSlice.actions;

//reducer
export default userSlice.reducer;
