import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './style.scss';

function RenderInput(props: AutocompleteRenderInputParams) {
    return (
        <TextField
            {...props}
            label="city"
            inputProps={{
                ...props.inputProps,
                autoComplete: 'new-password',
            }}
        />
    );
}

export default RenderInput;
