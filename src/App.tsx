import { useState, useEffect } from 'react';
import './App.scss';
import Search from './components/Search/index';
<<<<<<< HEAD
import searchingCity from './api/searchingCity';
=======

>>>>>>> ac8a7c4c0c9fa7128418b20a32e22c89f115db77

function App(): JSX.Element {
    const [search, setSearch] = useState<string>('');
    const [cities, setCities] = useState<string[]>([]);
<<<<<<< HEAD
=======

>>>>>>> ac8a7c4c0c9fa7128418b20a32e22c89f115db77
    useEffect(() => {
        if (search) {
            searchingCity(search).then((res) => {
                setCities(res);
            });
        }
    }, [search]);
<<<<<<< HEAD
=======

>>>>>>> ac8a7c4c0c9fa7128418b20a32e22c89f115db77
    function searchInputChanging(_: React.SyntheticEvent, value: string) {
        setSearch(value);
    }
    function selectedOption(_: React.SyntheticEvent, selectedValue: string) {
        setSelect(selectedValue);
    }
    return (
        <div className="App">
<<<<<<< HEAD
            <Search onSearch={searchInputChanging} cities={cities} />
=======
>>>>>>> ac8a7c4c0c9fa7128418b20a32e22c89f115db77
        </div>
    );
}

export default App;
