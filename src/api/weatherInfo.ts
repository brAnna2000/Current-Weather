import axios from 'axios';

async function getWeatherInfo(city: string) {
    function time(sun: number) {
        const date = new Date(sun * 1000);
        const hours = date.getHours();
        const minutes =
            String(date.getMinutes()).length === 1
                ? `0${String(date.getMinutes())}`
                : String(date.getMinutes());
        const sunTime = `${hours}:${minutes}`;
        return sunTime;
    }
    function description(weather: Array<object>) {
        let descript = '';
        weather.forEach((element) => {
            if (weather.indexOf(element) === 0) {
                descript = `${element.description}`;
            } else {
                descript = `${descript}, ${element.description}`;
            }
        });
        return descript;
    }
    const path1 = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=ru`;
    try {
        const res = await axios.get(path1);
        const {
            data: {
                wind: { speed },
                main: { temp, temp_min, temp_max },
                sys: { sunset, sunrise },
                weather,
            },
        } = res;

        const info: {
            city: string;
            country: string;
            speed: number;
            temp: number;
            temp_min: number;
            temp_max: number;
            sunset: string;
            sunrise: string;
            weather: string;
        } = {
            city,
            country: 'Беларусь',
            speed,
            temp: Math.round(Number(`${temp - 273.15}`)),
            temp_min: Math.round(Number(`${temp_min - 273.15}`)),
            temp_max: Math.round(Number(`${temp_max - 273.15}`)),
            sunset: time(sunset),
            sunrise: time(sunrise),
            weather: description(weather),
        };
        return info;
    } catch (error) {
        return error;
    }
}

export default getWeatherInfo;
