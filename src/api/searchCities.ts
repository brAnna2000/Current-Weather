import axios from 'axios';
import SearchCityTypes from '../utils/constans';

async function getSearch(search: string) {
    const path = `${process.env.REACT_APP_HERE_API_BASE_URL}autocomplete?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}&types=${SearchCityTypes.CITY}&in=circle:${SearchCityTypes.CIRCLE};r=${SearchCityTypes.RADIUS}&in=countryCode:${SearchCityTypes.COUNTRY_CODE}&limit=${SearchCityTypes.LIMIT}&lang=${SearchCityTypes.LANG}`;
    try {
        const res = await axios.get(path);
        let {
            data: { items },
        } = res;

        interface ItemsCity {
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
        items = items.map((item: ItemsCity) => item.address.city);
        return items;
    } catch (error) {
        return error;
    }
}

export default getSearch;
