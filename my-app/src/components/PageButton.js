import React from "react";
import '../styles/main.css';

function PageButton({ mode, onClick }) {

    const srcImg = (mode === 0) ? ["/button_next.png", "Next Page"] : ["/button_prev.png", "Prev Page"];

    return (
        <button className="pageButton" onClick={onClick}>
            <img src={srcImg[0]} alt={srcImg[1]} draggable='false'/>
        </button>
    );
}

export default PageButton