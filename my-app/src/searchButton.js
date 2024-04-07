import React from "react";
import './main.css';

function SearchButton(props) {
    return (
        <button className="searchButton" onClick={props.onClick}>
            <img src='/search.png' alt="Search Button" />
        </button>
    );
}

SearchButton.defaultProps = {
    onClick: () => {
        console.log('기본 클릭 이벤트');
    }
};

export default SearchButton