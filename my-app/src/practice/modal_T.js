import ReactModal from "react-modal";

const Modal_T = ({onSubmit, onClose}) => {

    const handleClickSubmit = () => {
        onSubmit();
    };

    const handleClickCancel = () => {
        onClose();
    };

    return (
        <ReactModal isOpen>
            <div>모달 연습</div>
            <div>
        <button onClick={handleClickSubmit}>확인</button>
        <button onClick={handleClickCancel}>취소</button>
      </div>
        </ReactModal>
    );
};

export default Modal_T