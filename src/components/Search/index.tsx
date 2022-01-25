import './style.scss';
import Autocomplete from '@mui/material/Autocomplete';
import Input from './Input';

interface SearchProps {
    items: string[];
    onSearch: (event: React.SyntheticEvent, value: string) => void;
}

function Search(props: SearchProps): JSX.Element {
    return (
        <div className="searchBox">
            <Autocomplete
                id="country-select-demo"
                sx={{ width: 300 }}
                options={props.items}
                autoHighlight
                getOptionLabel={(option) => option}
                renderInput={Input}
                onInputChange={props.onSearch}
            />
        </div>
    );
}

export default Search;
