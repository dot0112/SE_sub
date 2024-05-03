import React from "react";
import '../styles/item.css';

function ItemDetail({ itemNum, modalOpen, setModalOpen }) {
    if (!modalOpen) return null;

    return (
        modalOpen &&
        <div className={`modal-container`} >
            <div className={`modal-content ${modalOpen ? "visible" : ""}`}>
                <div className={'modal-content-grid'}>
                    <img src="logo192.png" alt={itemNum} style={{ width: "700px" }} />
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <button onClick={() => setModalOpen(false)}>닫기</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ItemDetail