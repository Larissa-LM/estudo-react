import './App.css';
import logo from './yinyang.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
          Yin e Yang é a representação do positivo e do negativo, um princípio de dualidade, onde um não vive sem o outro.
      </p>
      <a
          className="App-link"
          href="https://brasilescola.uol.com.br/filosofia/yin-yang.htm"
          target="_blank"
          rel="noopener noreferrer"
      >
          Saiba mais 
      </a>
      </header>
  </div>
  
       
  );
}

export default App;
