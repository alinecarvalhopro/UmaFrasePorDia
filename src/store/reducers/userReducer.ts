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
  },
});

export const {setUserAction} = userSlice.actions;

export default userSlice.reducer;
