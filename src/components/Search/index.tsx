import './style.scss';
import Autocomplete from '@mui/material/Autocomplete';
import RenderInput from './RenderInput';

interface SearchProps {
    items: string[];
    onSearch: (event: React.SyntheticEvent, value: string) => void;
    onClick: (event: React.SyntheticEvent, selectedValue: string) => void;
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
                renderInput={RenderInput}
                onInputChange={props.onSearch}
                onChange={props.onClick}
            />
        </div>
    );
}

export default Search;
