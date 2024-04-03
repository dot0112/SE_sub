/* eslint-disable */
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '테스트용 글';
  let testStyle = { color: 'gray', fontSize: '30px' }
  function f() {
    return 1;
  }

  let [글제목, 글제목변경] = useState(['test state', 'ㅁㄴㄹ', 'ㅂㄷㅈㄱ']);
  let [글제목2, 글제목2변경] = useState('글제목2');
  let [글제목3, 글제목3변경] = useState('글제목3');

  let [좋아요수, 좋아요수변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div style={testStyle}>테스트 중</div>
      </div>
      <button onClick={() => { 글제목변경(글제목 = 'change title') }}>btn</button>
      <div className="list">
        <h3>{글제목}<span onClick={() => { 좋아요수변경(좋아요수 + 1) }}>👍</span>{좋아요수}</h3>
        <p>4월 2일 test</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목2}</h3>
        <p>4월 8일 test</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목3}</h3>
        <p>4월 16일 test</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
