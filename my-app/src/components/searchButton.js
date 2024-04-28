import React from "react";
import '../styles/main.css';

// 변경을 줄 value 또는 event 를 매개 변수로 받음
function SearchButton({ onClick }) {
    return (
        <button className="searchButton" onClick={onClick}>
            <img src='/search.png' alt="Search Button" />
        </button>
    );
}

export default SearchButton