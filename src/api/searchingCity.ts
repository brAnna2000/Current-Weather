import axios from 'axios';
import {
    SearchCityTypes,
    SearchCityCircle,
    SearchCityCountryCode,
    SearchCityLimit,
    SearchCityLang,
} from '../utils/constans';

interface City {
    id: string;
    language: string;
    localityType: string;
    resultType: string;
    title: string;
    highlights: object;
    address: {
        city: string;
        countryCode: string;
        countryName: string;
        county: string;
        label: string;
        state: string;
    };
}
<<<<<<< HEAD
=======
>>>>>>> ac8a7c4c0c9fa7128418b20a32e22c89f115db77
async function searchingCity(search: string) {
    const path = `${process.env.REACT_APP_HERE_API_BASE_URL}autocomplete`;
    try {
        const {
            data: { items },
        } = await axios.get(path, {
            params: {
                q: search,
                apiKey: process.env.REACT_APP_API_KEY,
                types: SearchCityTypes.CITY,
                in: `circle:${SearchCityCircle.CIRCLE};r=${SearchCityCircle.RADIUS}`,
                in: `countryCode:${SearchCityCountryCode.COUNTRY_CODE}`,
                limit: SearchCityLimit.LIMIT,
                lang: SearchCityLang.LANG,
            },
        });
        return items.map((item: City) => item.address.city);
    } catch (error) {
        alert(`Ошибка ${error.name} : ${error.message}`);
        return error;
    }
}

export default searchingCity;
