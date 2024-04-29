import React from "react";
import '../styles/main.css';

function ItemBox({ itemNum }) {

    // 클릭 이벤트
    const itemDetail = () => {
        console.log(itemNum);
    };

    const itemImg = "logo192.png";
    const itemName = "itemNum" + itemNum;
    const itemPrice = itemNum * 100;

    return (
        <button className="itemBox" onClick={itemDetail}>
            <img src={itemImg} style={{ margin: 40 }} />
            <h1>{itemName}</h1>
            <h3>가격: {itemPrice}</h3>
        </button>
    );
}

export default ItemBox