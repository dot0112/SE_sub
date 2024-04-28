/* eslint-disable */
import { useState } from 'react';
import './styles/App.css';

function App() {

  let posts = '테스트용 글';
  let testStyle = { color: 'gray', fontSize: '30px' }
  function f() {
    return 1;
  }

  let [글제목, 글제목변경] = useState(['test state', 'asdf', 'qwer']);

  let [좋아요수, 좋아요수변경] = useState(0);

  function 제목변경() {
    var temp글제목 = [...글제목];
    글제목변경(temp글제목.sort());
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={testStyle}>테스트 중</div>
      </div>
      <button onClick={제목변경}>btn</button>
      <div className="list">
        <h3>{글제목[0]}<span onClick={() => { 좋아요수변경(좋아요수 + 1) }}>👍</span>{좋아요수}</h3>
        <p>4월 2일 test</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>4월 8일 test</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>4월 16일 test</p>
        <hr />
      </div>

      <Modal />

    </div>
  );
}

function Modal() {
  return (<div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>);
}

export default App;
