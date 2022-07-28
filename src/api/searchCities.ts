import axios from 'axios';
import requestConfig from './config';
import City from '../types/City/index'

async function searchCities(search: string) {
    const path = `${process.env.REACT_APP_HERE_API_BASE_URL}autocomplete`;
    try {
        const {
            data: { items },
        } = await axios.get(path, requestConfig(search));
        return items.map((item: City) => item.address.city);
    } catch (error: any) {
        return [];
    }
}

export default searchCities;
