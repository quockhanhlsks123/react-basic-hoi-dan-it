import logo from './logo.svg';
import './App.scss';
import MyComponents from './example/MyComponents';
import ListTodo from './example/Todos/ListTodos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Todo Apps with ReactJS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <ListTodo />
      </header>

    </div>
  );
}

export default App;
