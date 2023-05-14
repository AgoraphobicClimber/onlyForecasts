import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setError } from './store/features/weatherSlice';
import { setAlert } from './store/features/alertSlice';
import { RootState } from "./store/store"
import Search from "./components/Search";
import Alert from './components/Alert';
import Weather from './components/Weather';

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="has-text-centered">
      <Search title="Enter city name and press enter" />
      {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <Weather data={weatherData} />}

      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() =>dispatch(setError('Failed to fetch weather data. Please try again.'))} />}
    </div>
  );
}

export default App;
