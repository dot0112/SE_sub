import React, {useState, useEffect} from "react";
import '../styles/item.css';

function ItemDetail({ itemNum, open, close }) {

      // 현재 트랜지션 효과를 보여주고 있는 중이라는 상태 값
  const [animate, setAnimate] = useState(false)
  // 실제 컴포넌트가 사라지는 시점을 지연시키기 위한 값
  const [visible, setVisible] = useState(open)

  useEffect(() => {
    setVisible(open)

    // open 값이 true -> false 가 되는 것을 감지 (즉, 모달창을 닫을 때)
    if (visible && !open) {
      setAnimate(true)
      setTimeout(() => setAnimate(false), 200)
    }
    return () => {
      setVisible(false)
    }
  }, [visible, open])

  if (!animate && !visible) return null

    return (
        <div className={`modal-container`} >
            <div className={open ? "modal-content open" : "modal-content"}>
                <div className={'modal-content-grid'}>
                    <img src="logo192.png" alt={itemNum} style={{ width: "700px" }} />
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <button onClick={close}>닫기</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ItemDetail