import React from "react";
import '../styles/item.css';
import ItemBox from "./ItemBox";

function ItemList({ pageNum, viewItems = 12 , itemList }) {
    const startIndex = (pageNum - 1) * viewItems + 1; // 페이지마다 시작 인덱스 조정
    const items = Array.from({ length: viewItems }, (_, index) => startIndex + index);

    return (
        <div className="grid-container" >
            {items.map(itemNum => (
                <ItemBox itemNum={itemNum} key={itemNum}/>
            ))}
        </div>
    );
}

export default ItemList