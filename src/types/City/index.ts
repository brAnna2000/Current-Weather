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

export default City;