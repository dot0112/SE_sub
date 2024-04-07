/* eslint-disable */
import './main.css';
import TextInput from './textInput';
import SearchButton from './searchButton';

function Main() {

    const buttonEvent = () => {
        console.log("버튼이 눌렸습니다.");
    }

    return (
        <div className="App">
            <div className='black-nav'>
                테스트 제목
                <div className='searchContainer'>
                    <TextInput /><SearchButton onClick={buttonEvent} />
                </div>
            </div>
        </div >
    );
}

export default Main;
