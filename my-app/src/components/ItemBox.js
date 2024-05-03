import React, { useState } from "react";
import '../styles/item.css';
import ItemDetail from "./ItemDetail";
import useModals from "../hooks/useModals";
import {modals} from "./modals";

function ItemBox({ itemNum }) {

    const {openModal} = useModals();

    const handleClick = () => {
        openModal(modals.modal_T, {foo: 'bar'});
    };


    const itemImg = "logo192.png";
    const itemName = "itemNum" + itemNum;
    const itemPrice = itemNum * 100;

    /*return (
        <div>
            <button className="itemBox" onClick={openModal}>
                <img src={itemImg} style={{ margin: 40 }} alt={itemName} />
                <h1>{itemName}</h1>
                <h3>가격: {itemPrice}</h3>
            </button>
            {modalOpen && <ItemDetail open={modalOpen} cloase={closeModal} itemNum={itemNum} />}
        </div>
    );*/

    return (
        <div>
            <button className="itemBox" onClick={handleClick}>
                <img src={itemImg} style={{ margin: 40 }} alt={itemName} />
                <h1>{itemName}</h1>
                <h3>가격: {itemPrice}</h3>
            </button>
        </div>
    );
}

export default ItemBox