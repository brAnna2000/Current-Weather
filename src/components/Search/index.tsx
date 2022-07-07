import { useState } from 'react';
import './style.scss';
import Autocomplete from '@mui/material/Autocomplete';
import Input from './Input';
import searchCities from '../../api/searchCities';

interface SearchProps {
    onClick: (event: React.SyntheticEvent, selectedValue: string) => void;
}

function Search(props: SearchProps): JSX.Element {
    const [cities, setCities] = useState<string[]>([]);

    function onCitiesSearch(_: React.SyntheticEvent, value: string) {
        searchCities(value).then((res) => {
            setCities(res);
        }) 
    }

    return (
        <div className="searchBox">
            <Autocomplete
                id="country-select-demo"
                sx={{ width: 300 }}
                options={cities}
                autoHighlight
                renderInput={Input}
                onInputChange={onCitiesSearch}
                onChange={props.onClick}
            />
        </div>
    );
}

export default Search;
