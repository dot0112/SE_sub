import React from "react";
import '../styles/main.css';

function ItemBox({ itemNum }) {

    const itemDetail = () => {
        console.log(itemNum);
    };

    return (
        <button className="itemBox" onClick={itemDetail}>
            <img src='/search.png' alt="test" />
            {itemNum}
        </button>
    );
}

export default ItemBox