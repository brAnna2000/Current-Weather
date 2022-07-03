import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import FavoriteCitiesList from './Components/FavoriteCitiesList/index.tsx';

interface AppProps {
    citiesList: string[],
}
function App({citiesList = []}:AppProps) {
    const dispatch = useDispatch();
    const cities: string[] = useSelector(state => state.cities);
    citiesList = cities;
    const addCash = (city: string | null) => {
        dispatch({type: 'ADD_CITY', payload: city});
    };
    const getCash = (city: string | null) => {
        dispatch({type: 'REMOVE_CITY', payload: city});
    };
    return (
    <div className="App">
        <FavoriteCitiesList {...citiesList}/>
        <button type='button' onClick={()=> addCash(prompt())}>Добавить город</button>
        <button type='button' onClick={()=> getCash(prompt())}>Удалить город</button>
    </div>
    );
}
export default (App);
