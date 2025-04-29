import React from 'react';
import './App.css';
import CardGenerator from './components/CardGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Card Generator</h1>
      </header>
      <main>
        <CardGenerator />
      </main>
      <footer>
        <p>Created with React + TypeScript + Konva</p>
      </footer>
    </div>
  );
}

export default App;
