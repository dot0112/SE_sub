/* eslint-disable */
import { useState } from 'react';
import './styles/main.css';
import TextInput from './components/textInput';
import SearchButton from './components/searchButton';
import ItemBox from './components/ItemBox';

function Main() {

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
            <div className="grid-container">
                <ItemBox itemNum={1} />
                <ItemBox itemNum={2} />
                <ItemBox itemNum={3} />
                {/* 더 많은 ItemBox 컴포넌트를 추가할 수 있습니다 */}
            </div>
        </div>
    );
}

export default Main;
