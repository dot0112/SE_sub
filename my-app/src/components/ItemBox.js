import React from "react";
import '../styles/item.css';
import useModals from "../hooks/useModals";
import {modals} from "./modals";

function ItemBox({ itemNum }) {

    const {openModal} = useModals();

    const handleClick = () => {
        openModal(modals.itemDetail, {key: {itemNum}, itemNum: itemNum});
    };


    const itemImg = "logo192.png";
    const itemName = "itemNum" + itemNum;
    const itemPrice = itemNum * 100;

    return (
        <div>
            <button className="itemBox" onClick={handleClick} >
                <img src={itemImg} style={{ margin: 40 }} alt={itemName}  draggable='false'/>
                <h1>{itemName}</h1>
                <h3>가격: {itemPrice}</h3>
            </button>
        </div>
    );
}

export default ItemBox