import axios from 'axios';

async function receivingWeatherInfo(city: string) {
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
    let path = '';
    if (city.startsWith('lat') && city.includes('lon')) {
        const lat = city.slice(3, city.indexOf('.') + 8);
        const lon = city.slice(city.indexOf('lon') + 3);
        path = `${process.env.REACT_APP_OPEN_WEATHER_URL}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=ru`;
    } else {
        path = `${process.env.REACT_APP_OPEN_WEATHER_URL}q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=ru`;
    }

    try {
        const res = await axios.get(path);
        const {
            data: {
                wind: { speed },
                main: { temp, temp_min, temp_max },
                sys: { sunset, sunrise },
                weather,
                name,
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
            city: city.startsWith('lat') && city.includes('lon') ? name : city,
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
        alert(`Ошибка ${error.name} : ${error.message}`);
        return error;
    }
}

export default receivingWeatherInfo;
