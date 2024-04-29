/* eslint-disable */
import { useState } from 'react';
import './styles/main.css';
import TextInput from './components/TextInput';
import SearchButton from './components/SearchButton';
import ItemList from './components/ItemList';

function Main() {
    const [page, setPage] = useState(1);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        console.log('Searching for: ' + inputValue);
    };

    return (
        <div className="App">
            <div className='black-nav'>
                물품 관리 시스템
                <div className='searchContainer'>
                    <TextInput value={inputValue} onChange={handleInputChange} />
                    <SearchButton onClick={handleSearch} />
                </div>
            </div>
            <ItemList pageNum={page} />
        </div>
    );
}

export default Main;
