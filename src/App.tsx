import { useState, useEffect } from 'react';
import './App.scss';
import Search from './components/Search/index';
import searchCities from './api/searchCities';

function App(): JSX.Element {
    const [search, setSearch] = useState<string>('');
    const [cities, setCities] = useState<string[]>([]);
    useEffect(() => {
        if (search) {
            searchCities(search).then((res) => {
                setCities(res);
            });
        }
    }, [search]);
    function searchInputChanging(_: React.SyntheticEvent, value: string) {
        setSearch(value);
    }
    return (
        <div className="App">
            <Search onSearch={searchInputChanging} cities={cities} />
        </div>
    );
}

export default App;
