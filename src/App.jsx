import './App.css';
import ComicView from './components/ComicView';
import Error from './components/Error';
import HeaderView from './components/HeaderView';
import InputPanel from './components/InputPanel';

function App() {
  return (
    <div className="App">
      <HeaderView />
      <div className="dashboard">
        <InputPanel />
        <ComicView />
      </div>
      <Error />

    </div>
  );
}

export default App;
