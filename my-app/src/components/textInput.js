import '../styles/main.css';

// 변경을 줄 value 또는 event 를 매개 변수로 받음
function TextInput({ value, onChange }) {

    return (
        <input
            type="text"
            className="textInput"
            value={value} // input의 value를 state에 바인딩
            onChange={onChange} // 값이 변경될 때마다 handleChange 호출
        />
    );
}

export default TextInput;