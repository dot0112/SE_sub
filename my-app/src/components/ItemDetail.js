import { useState } from 'react';
import '../styles/item.css';
import ReactModal from "react-modal";
import Select from 'react-select';

function ItemDetail({ onClose, itemNum }) {

    const handleClickCancel = () => {
        onClose();
    };

    const standNum = [
        { value: 1, label: '1' },
        { value: 31, label: '31' },
        { value: 30, label: '30' },
        { value: 29, label: '29' },
        { value: 28, label: '28' },
        { value: 27, label: '27' }
    ];

    const imgPath = "rtx4090.jpg";
    const name = "itemNum" + itemNum;
    const price = itemNum * 100;
    const category = "전자제품";


    const [selectStandNum, setSelectStandNum] = useState(standNum[0]);

    return (
        <ReactModal isOpen className={"modal-container"}>
            <div className="modal-content">
                <div className={'modal-content-grid'}>
                    <img src={imgPath} alt={itemNum} className='modal-content-grid-img' draggable='false' />
                    <div className={'modal-content-grid-text'}>
                        <button onClick={handleClickCancel} className='modal-content-grid-button-exit'>
                            <img src="button_exit.png" alt='close' draggable='false' />
                        </button>
                        <h1>{name}</h1>
                        <div style={{ display: 'grid', gridTemplateColumns: '0.6fr 1fr' }}>
                            <div>가격</div>
                            <div>{price}</div>
                            <div>카테고리</div>
                            <div>{category}</div>
                            <div>물품번호</div>
                            <div>{itemNum}</div>
                        </div>
                        <div style={{ margin: "auto 40px 160px 0" }}>
                            <div>진열대</div>
                            <Select
                                options={standNum}
                                onChange={setSelectStandNum}
                                defaultValue={(standNum.length > 0) ? standNum[0] : { value: null, label: "진열되지 않은 상품" }}
                                isSearchable={false}
                                isClearable={false}
                                isMulti={false}
                                maxMenuHeight={245}
                                components={{
                                    IndicatorSeparator: () => null,
                                }}
                                classNamePrefix='modal-content-grid-select'
                            />
                            <button className='modal-content-grid-button-stand' onClick={() => {console.log(selectStandNum)}}>진열대 위치 조회</button>
                        </div>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
}

export default ItemDetail