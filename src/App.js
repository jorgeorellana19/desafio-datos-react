import logo from './logo.svg';
import './App.css';
import React from 'react';
import Formulario from './components/Formulario.jsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <h1> Desafio de los estados de los componentes</h1>
      <Formulario titulo="Iniciar sesion"/>
    </div>
  );
}
export default App;
