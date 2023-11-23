import { useState } from 'react';
// import './App.css';
import './App2.css';
import ComicView from './components/ComicView';
import Error from './components/Error';
import HeaderView from './components/HeaderView';
import InputPanel from './components/InputPanel';

function App() {
  const [error, setError] = useState("Errors will appear here!");
  const clearError = () => {
    setError("");
    console.log("Error Cleared!");
  }

  // Format, data will be added after user enters value
  // {
  //     id: uuidv4(),
  //     text: inputValue,
  //     imageUrl: imageUrl
  //   }

  const storedInputPrompts = JSON.parse(localStorage.getItem("stored"))
  console.log(storedInputPrompts)
  const [inputPrompts, setInputPrompts] = useState([
  ]);
  if(typeof(storedInputPrompts) === 'object'){
    setInputPrompts(storedInputPrompts)
  }
  console.log(inputPrompts)

  const [inputFieldVisible, setInputFieldVisible] = useState(false);

  const toggleInputField = () => {
    setInputFieldVisible(!inputFieldVisible);
  };

  return (
    <div className="App">
      <HeaderView />
      <div className="dashboard">
        <InputPanel inputPrompts={inputPrompts} setInputPrompts={setInputPrompts} setError={setError} inputFieldVisible={inputFieldVisible} />
        <ComicView inputPrompts={inputPrompts} setInputPrompts={setInputPrompts} />
      </div>
      { error !== "" && <Error errorText={error} clearError={clearError} /> }

      {/* <button className="floating-button" onClick={toggleInputField}>
        Toggle Input
      </button> */}

    </div>
  );
}

export default App;
