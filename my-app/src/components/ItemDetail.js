import React from "react";
import '../styles/main.css';

function ItemDetail({ itemNum, modalOpen, setModalOpen }) {
    if (!modalOpen) return null;

    return (
        modalOpen &&
        <div className={'modal-container'} >
            <div className={'modal-content'}>
                <p>리액트로 모달 구현하기</p>
                <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                    모달 닫기
                </button>
            </div>
        </div>
    );
}

export default ItemDetail