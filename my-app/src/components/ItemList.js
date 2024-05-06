import React from "react";
import '../styles/item.css';
import ItemBox from "./ItemBox";

function ItemList({ pageNum }) {
    const startIndex = (pageNum - 1) * 12 + 1; // 페이지마다 시작 인덱스 조정
    const items = Array.from({ length: 12 }, (_, index) => startIndex + index);

    return (
        <div className="grid-container" >
            {items.map(itemNum => (
                <ItemBox itemNum={itemNum} key={itemNum}/>
            ))}
        </div>
    );
}

export default ItemList