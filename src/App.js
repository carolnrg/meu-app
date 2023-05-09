import logo from './logo.svg';
import './App.css';
import {Relogio} from './Components/Relogio';

function App() {
  return (
    <div className="App">
      <Relogio />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Fatec
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
