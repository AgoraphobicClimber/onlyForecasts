import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AlertState {
  message: string;
}

const initialState: AlertState = {
  message: '',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setAlert } = alertSlice.actions;

export const selectAlert = (state: RootState) => state.alert.message;

export default alertSlice.reducer;