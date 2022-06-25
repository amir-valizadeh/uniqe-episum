import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <input className='input' type="text" placeholder='please enter your word' />
        <br />
        <input type="number" placeholder='please enter paragraph number' />
        <br />
        <button className='btn btn-primary lg' >Generate</button>
        <br />
        <br />
        <div>
          <p> 
            your text will be displayed here

          </p>

        </div>
      </header>
    </div>
  );
}

export default App;
