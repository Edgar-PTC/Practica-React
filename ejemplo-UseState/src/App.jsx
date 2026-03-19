import './App.css'
import { useState } from 'react';
import InputText from './components/InputText'
import Boton from './components/Boton'

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resul, setResul] = useState(0);

  const sumar = () => {
    let suma = parseInt(numero1) + parseInt(numero2);
    setResul(suma);
  }

  const restar = () => {
    let suma = parseInt(numero1) - parseInt(numero2);
    setResul(suma);
  }

  const multiplicar = () => {
    let suma = parseInt(numero1) * parseInt(numero2);
    setResul(suma);
  }
  
  const dividir = () => {
    let suma = parseInt(numero1) / parseInt(numero2);
    setResul(suma);
  }

  return (
    <>
      <div className="order">
        <h1>Operacion de dos numeros</h1>
        <InputText label="Ingrese el primer numero" type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
        <InputText label="Ingrese el segundo numero" type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
        <div className='Botones'>
          <Boton label="Sumar" onClick={sumar}/>
          <Boton label="Restar" onClick={restar}/>
          <Boton label="Multiplicar" onClick={multiplicar}/>
          <Boton label="Dividir" onClick={dividir}/>
        </div>
        <h2>Resultado: {resul }</h2>
      </div>
    </>
  )
}

export default App