import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleSum = () => {
    setResult(Number(num1) * Number(num2)); 
    // BUG: deveria somar, mas multiplica
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivide = () => {
    if (Number(num2) === 0) {
    setResult('Erro: divisão por zero');
  } else {
    setResult(Number(num1) / Number(num2));
  }
  };

  const handleClear = () => {
  setNum1('');
  setNum2('');
  setResult(null);
};

  return (
    <div className="container">
      <h1>Calculadora com Bugs</h1>
      <div className="inputs">
        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={handleSum}>Somar</button>
        <button onClick={handleSubtract}>Subtrair</button>
        <button onClick={handleMultiply}>Multiplicar</button>
        <button onClick={handleDivide}>Dividir</button>
        <button onClick={handleClear}>Limpar</button>
      </div>
      {result !== null && (
        <div className="result">
          <strong>Resultado:</strong> {result}
        </div>
      )}
    </div>
  );
}

export default App;
