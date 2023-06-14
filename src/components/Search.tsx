import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store/store';
import { AnyAction } from '@reduxjs/toolkit';
import { setAlert } from '../store/features/alertSlice';
import { fetchWeatherData, setLoading } from '../store/features/weatherSlice';
import logo from '../images/logo.png'
import githublogo from "../images/githublogo.png"

interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const [city, setCity] = useState('');

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(city.trim() === '') {
            return dispatch(setAlert('City is Required'));
        }

        dispatch(setLoading());
        dispatch(fetchWeatherData(city));
        setCity('')
    }

    return (
    <div>
         <a className="gitlogo" href="https://github.com/AgoraphobicClimber/onlyForecasts" target="_blank" rel="noopener noreferrer">
            <img src={githublogo} className="gitlogo" alt="Git" /> 
            </a>
        <div className="hero has-text-centered">
        <div className="background-nav">
         <div className="navbar">
            <img src={logo} className="logo" alt="Logo" />
            <form className="py-5" onSubmit={submitHandler}>
                        <input 
                        type="text"
                        className="input has-text-centered mb-2"
                        placeholder="Enter City Name"
                        style={{maxWidth: 300}}
                        value={city}
                        onChange={changeHandler}
                        />
                    </form>
             </div>
          </div>
        </div>
    </div>
    );
}

export default Search;
