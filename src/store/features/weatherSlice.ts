import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { WeatherData, WeatherError } from '../types';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (city: string) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);

    if (!res.ok) {
      const resData: WeatherError = await res.json();
      throw new Error(resData.message);
    }

    const resData: WeatherData = await res.json();
    return resData;
  }
);

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || '';
    });
  },
});


export const { setLoading, setError } = weatherSlice.actions;

export default weatherSlice.reducer;

export const selectWeatherData = (state: RootState): WeatherData | null =>
  state.weather.data;

export const selectWeatherLoading = (state: RootState): boolean =>
  state.weather.loading;

export const selectWeatherError = (state: RootState): string =>
  state.weather.error;
