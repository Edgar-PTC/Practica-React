import { useState } from 'react'
import './App.css'
import InputText from './Components/InputText';
import Boton from './Components/Boton';

function App() {
  const [tarea, setTarea] = useState("");
  const [listaTarea, setListaTarea] = useState([])

  const AgregarTarea=()=>{
    if(tarea.trim() !== ""){
      setListaTarea([...listaTarea, tarea]);
      setTarea("")
    }
  }

  const EliminarTarea=(index)=>{
    let nuevaLista = listaTarea.filter((tarea, indice)=> indice !== index)
    setListaTarea(nuevaLista);
  }

  return (
    <>
      <main className='order'>
        <h1>ToDo list:</h1>
        <div className='Agregar'>
          <InputText label="Agregar Tarea" value={tarea} type="text" onChange={(e) => setTarea(e.target.value)}/>
          <Boton label="Agregar" onClick={AgregarTarea}/>
        </div>

        <div>
          <ul className=''>
            {listaTarea.map((tarea, index) => (
              <li key={index}>{tarea} <Boton label="Eliminar" onClick={()=>EliminarTarea(index)}/></li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default App
