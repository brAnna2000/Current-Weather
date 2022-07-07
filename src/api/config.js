import {
    SearchCityTypes,
    CIRCLE,
    RADIUS,
    COUNTRY_CODE,
    LIMIT,
    LANG
} from '../utils/constans';

function requestConfig(search) {
    
    const request = {
        params: {
        q: search,
        apiKey: process.env.REACT_APP_API_KEY,
        types: SearchCityTypes.CITY,
        in: `circle:${CIRCLE};r=${RADIUS}`,
        in: `countryCode:${COUNTRY_CODE}`,
        limit: LIMIT,
        lang: LANG
    }
}
    return request;
}

export default requestConfig;
