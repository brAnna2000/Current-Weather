import React from 'react';
import './App.css';
import './Components/FavoriteCitiesList/index'
import FavoriteCitiesList from './Components/FavoriteCitiesList/index';
interface AppProps {
    citiesList: string[],
}
function App({citiesList = ['Минск','Гродно','Витебск','Смолевичи','Молодечно','Лида','Барановичи','Борисов']}:AppProps) {
    return (
    <div className="App">
        <FavoriteCitiesList {...citiesList}/>
    </div>
    );
}
export default (App)
