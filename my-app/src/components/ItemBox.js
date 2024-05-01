import React, { useState } from "react";
import '../styles/main.css';
import ItemDetail from "./ItemDetail";

function ItemBox({ itemNum }) {

    const [modalOpen, setModalOpen] = useState(false);

    // 클릭 이벤트
    const itemDetail = () => {
        setModalOpen(true);
    };

    const itemImg = "logo192.png";
    const itemName = "itemNum" + itemNum;
    const itemPrice = itemNum * 100;

    return (
        <div>
            <button className="itemBox" onClick={itemDetail}>
                <img src={itemImg} style={{ margin: 40 }} alt={itemName} />
                <h1>{itemName}</h1>
                <h3>가격: {itemPrice}</h3>
            </button>
            {modalOpen && <ItemDetail modalOpen={modalOpen} setModalOpen={setModalOpen} itemNum={itemNum} />}
        </div>
    );
}

export default ItemBox