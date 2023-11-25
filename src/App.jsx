import { useState } from 'react';
import './App.css';
// import './App2.css';
import ComicView from './components/ComicView';
import Error from './components/Error';
import HeaderView from './components/HeaderView';
import InputPanel from './components/InputPanel';
import { useEffect } from 'react';

function App() {
  const [error, setError] = useState("Errors will appear here!");

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "Are you sure you want to leave? Your changes may not be saved.";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // useEffect will run only once on mount

  const clearError = () => {
    setError("");
    console.log("Error Cleared!");
  }
  const [inputPrompts, setInputPrompts] = useState([
    // Format, data will be added after user enters value
    // {
      //   id: uuidv4(),
      //   text: inputValue,
      //   image_annotation: inputValue,
      //   imageUrl: imageUrl
      // }
    ]);
    localStorage.setItem("stored", JSON.stringify(inputPrompts))
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

      <button className="floating-button" onClick={toggleInputField} aria-hidden="true">
        Enter Prompt
      </button>

    </div>
  );
}

export default App;
