import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';

import weatherReducer from './features/weatherSlice';
import alertReducer from './features/alertSlice';

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        alert: alertReducer
    },
    middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;