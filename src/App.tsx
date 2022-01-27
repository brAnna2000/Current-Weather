import { useState, useEffect } from 'react';
import './App.scss';
import Search from './components/Search/index';
import WeatherInfo from './components/WeatherInfo/index';
import searchingCity from './api/searchingCity';
import receivingWeatherInfo from './api/receivingWeatherInfo';

function App(): JSX.Element {
    const [search, setSearch] = useState<string>('');
    const [cities, setCities] = useState<string[]>([]);
    const [selected, setSelect] = useState<string>('');
    const [weatherData, setWeatherData] = useState({
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
        if (weatherData.city === '') {
            receivingWeatherInfo('Минск').then((res) => {
                setWeatherData(res);
            });
        }
    }, [weatherData]);

    if (navigator.geolocation) {
        const a = navigator.geolocation.getCurrentPosition((position) => {
            receivingWeatherInfo(
                `lat${position.coords.latitude}lon${position.coords.longitude}`
            ).then((res) => {
                setWeatherData(res);
            });
        });
    }

    useEffect(() => {
        if (search) {
            searchingCity(search).then((res) => {
                setCities(res);
            });
        }
    }, [search]);
    useEffect(() => {
        if (selected) {
            receivingWeatherInfo(selected).then((res) => {
                setWeatherData(res);
            });
        }
    }, [selected]);
    function searchInputChanging(_: React.SyntheticEvent, value: string) {
        setSearch(value);
    }
    function selectedOption(_: React.SyntheticEvent, selectedValue: string) {
        setSelect(selectedValue);
    }
    return (
        <div className="App">
            <Search
                onSearch={searchInputChanging}
                onClick={selectedOption}
                cities={cities}
            />
            <WeatherInfo weatherData={weatherData} />
        </div>
    );
}

export default App;
