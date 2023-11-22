import { useState } from 'react';
import './App.css';
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

  const [inputPrompts, setInputPrompts] = useState([

  ]);

  return (
    <div className="App">
      <HeaderView />
      <div className="dashboard">
        <InputPanel inputPrompts={inputPrompts} setInputPrompts={setInputPrompts} setError={setError} />
        <ComicView inputPrompts={inputPrompts} setInputPrompts={setInputPrompts} />
      </div>
      { error !== "" && <Error errorText={error} clearError={clearError} /> }
    </div>
  );
}

export default App;
