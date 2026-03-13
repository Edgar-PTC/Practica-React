import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton'
import Cards from './components/Cards'

const jsonA = [
  {
    "id": 1,
    "nombre": "Auriculares Cancelación de Ruido",
    "imagen": "https://ejemplo.com/imagenes/auriculares.jpg",
    "descripcion": "Auriculares inalámbricos con tecnología activa de cancelación de ruido y 30 horas de batería."
  },
  {
    "id": 2,
    "nombre": "Teclado Mecánico RGB",
    "imagen": "https://ejemplo.com/imagenes/teclado.jpg",
    "descripcion": "Teclado con switches mecánicos táctiles y retroiluminación personalizable para gaming."
  },
  {
    "id": 3,
    "nombre": "Reloj Inteligente Pro",
    "imagen": "https://ejemplo.com/imagenes/reloj.jpg",
    "descripcion": "Monitorización de salud avanzada, GPS integrado y resistencia al agua hasta 50 metros."
  }
]

function App() {
  const [mostrar, setMostrar] = useState(false);

  return(
    <>
      <Boton
        titulo="EMPEZAR"
        accion={() => setMostrar(true)}
      />
      {mostrar && <CardsPanel json= {jsonA} />}
    </>
  )
}

function CardsPanel({json}) {
  return(
    <div className='divTarjetas'>
      {json.map((product) => (
        <Cards
          key={product.id}
          header={product.nombre}
          body={product.descripcion}
          image={product.imagen}
        />
      ))};
    </div>
  );
}

export default App
