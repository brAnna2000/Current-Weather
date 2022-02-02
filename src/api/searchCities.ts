import axios from 'axios';
import {
    SearchCityTypes,
    CIRCLE,
    RADIUS,
    COUNTRY_CODE,
    LIMIT,
    LANG
} from '../utils/constans';

import City from '../types/City/index'

async function searchCities(search: string) {
    const path = `${process.env.REACT_APP_HERE_API_BASE_URL}autocomplete`;
    const cityParams = {
            params: {
                q: search,
                apiKey: process.env.REACT_APP_API_KEY,
                types: SearchCityTypes.CITY,
                in: `circle:${CIRCLE};r=${RADIUS}`,
                in: `countryCode:${COUNTRY_CODE}`,
                limit: LIMIT,
                lang: LANG,
            }
        }
    try {
        const {
            data: { items },
        } = await axios.get(path, cityParams);
        return items.map((item: City) => item.address.city);
    } catch (error) {
        return [];
    }
}

export default searchCities;
