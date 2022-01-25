import { useState, useEffect } from 'react';
import './App.scss';
import Search from './components/Search/index';
import getSearch from './api/searchCities';

function App(): JSX.Element {
    const [search, setSearch] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);
    useEffect(() => {
        if (search) {
            getSearch(search).then((res) => {
                setItems(res);
            });
        }
    }, [search]);
    function searchChanging(_: React.SyntheticEvent, value: string) {
        setSearch(value);
    }
    return (
        <div className="App">
            <Search onSearch={searchChanging} items={items} />
        </div>
    );
}

export default App;
