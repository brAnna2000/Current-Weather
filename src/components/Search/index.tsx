import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './style.scss';
import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

function Search() {
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (search !== '') {
            axios
                .get(
                    `${process.env.REACT_APP_HERE_API_BASE_URL}autocomplete?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}&types=city&in=circle:53.90,27.55;r=300000&in=countryCode:BLR&limit=10&lang=ru`
                )
                .then((res) => {
                    const data = res.data.items;

                    // eslint-disable-next-line no-restricted-syntax
                    for (const prop in data) {
                        if (typeof data[prop] === 'object') {
                            data[prop] = data[prop].address.city;
                        }
                    }
                    setItems(data);
                })
                .catch(
                    // eslint-disable-next-line no-shadow
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        }
    }, [search]);
    return (
        <div>
            <Autocomplete
                id="country-select-demo"
                className="searchBox"
                sx={{ width: 300 }}
                options={items !== [] ? items : ['']}
                autoHighlight
                renderOption={(props, option) => (
                    <Box
                        component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...props}
                    >
                        {option}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="city"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password',
                        }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                )}
            />
        </div>
    );
}

export default Search;
