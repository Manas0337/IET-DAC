import logo from './logo.svg';
import './App.css';
import Useref from './Q1useref';
import TableFormat from './Q2tableformat';
import RandomPassword from './Q3.randompassword';
import LoginForm from './Q4loginform';
function App() {
  return (
    <div className="App">
      <Useref/>
      <TableFormat/>
      <RandomPassword/>
      <LoginForm/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
