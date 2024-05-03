/* eslint-disable */
import { useState } from 'react';
import './styles/main.css';
import './styles/button.css'
import TextInput from './components/TextInput';
import SearchButton from './components/SearchButton';
import ItemList from './components/ItemList';
import PageButton from './components/PageButton';

function Main() {
    var maxPage = 20;

    const [page, setPage] = useState(1);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        console.log('Searching for: ' + inputValue);
    };

    const handlePage = (mode) => {
        var nextPage = (mode == 0) ? page + 1 : page - 1;
        if (nextPage == 0) nextPage = 1;
        if (nextPage > maxPage) nextPage = maxPage;
        setPage(nextPage);
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
            <div>
                <PageButton mode={1} onClick={() => handlePage(1)} />
                <PageButton mode={0} onClick={() => handlePage(0)} />
            </div>
        </div>
    );
}

export default Main;

