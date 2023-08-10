import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IUserResult, IUserStore} from '../../interfaces/userInterfaces';

const initialState: IUserStore = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<IUserResult>) => {
      state.user = action.payload;
    },
    logoutAction: state => {
      state.user = undefined;
    },
  },
});

export const {setUserAction, logoutAction} = userSlice.actions;

export default userSlice.reducer;
