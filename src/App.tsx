import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.scss';
import FavoriteCitiesList from './Components/FavoriteCitiesList/index.tsx';
import Search from './components/Search/index';

interface AppProps {
    citiesList: string[],
}

function App({citiesList = []}:AppProps) {
    const dispatch = useDispatch();
    const cities: string[] = useSelector(state => state.cities);
    citiesList = cities;
    const addCity = (city: string | null) => {
        if(city !== ''){
            dispatch({type: 'ADD_CITY', payload: city});
        }else{
            alert('Не введено название города');
        };
    };
    const removeCity = (city: string | null) => {
        if(city !== ''){
            dispatch({type: 'REMOVE_CITY', payload: city});
        }else{
            alert('Не введено название города');
        };
    };
    return (
    <div className="App">
        <FavoriteCitiesList {...citiesList}/>
        <button type='button' onClick={()=> addCity(prompt())}>Добавить город</button>
        <button type='button' onClick={()=> removeCity(prompt())}>Удалить город</button>
        <Search/>
    </div>
    );
}
export default (App);
