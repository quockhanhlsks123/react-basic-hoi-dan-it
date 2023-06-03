import logo from './logo.svg';
import './App.scss';
import MyComponents from './example/MyComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world with reactjs
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <MyComponents />
      </header>

    </div>
  );
}

export default App;
