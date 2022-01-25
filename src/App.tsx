import { useState, useEffect } from 'react';
import './App.scss';
import Search from './components/Search/index';
import WeatherInfo from './components/WeatherInfo/index';
import getSearch from './api/searchCities';
import getWeatherInfo from './api/weatherInfo';

function App(): JSX.Element {
    const [search, setSearch] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);
    const [selected, setSelect] = useState<string>('');
    const [info, setInfo] = useState({
        city: '',
        country: '',
        speed: 0,
        temp: 0,
        temp_min: 0,
        temp_max: 0,
        sunset: '',
        sunrise: '',
        weather: '',
    });
    useEffect(() => {
        if (search) {
            getSearch(search).then((res) => {
                setItems(res);
            });
        }
    }, [search]);
    useEffect(() => {
        if (selected) {
            getWeatherInfo(selected).then((res) => {
                setInfo(res);
            });
        }
    }, [selected]);
    function searchChanging(_: React.SyntheticEvent, value: string) {
        setSearch(value);
    }
    function selectedOption(_: React.SyntheticEvent, selectedValue: string) {
        setSelect(selectedValue);
    }
    return (
        <div className="App">
            <Search
                onSearch={searchChanging}
                onClick={selectedOption}
                items={items}
            />
            <WeatherInfo info={info} />
        </div>
    );
}

export default App;
