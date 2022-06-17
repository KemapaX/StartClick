import './App.css';
import './style/boton.css'

import imgLogo from './img/hola.gif';
import Boton from './component/Boton';
import Contador from './component/Contador';
import { useState } from 'react';

function App() {

  const [numClic, setNumClic] = useState(0);

  const manejarClic = () =>{
    setNumClic(numClic + 1);
  };

  const reiniciarContador = () =>{
    setNumClic(0);
  };


  return (
    <div className="App">
      <div className='content-logo'>
        <img src={imgLogo} className='img-logo' alt="logo"/>
      </div>
      <div className='constent-primary'>
        <Contador
        numClic={numClic}/>

        <Boton
        texto="Clic"
        esBotonClick={true}
        manejarClic={manejarClic}/>

        <Boton
        texto="Reiniciar"
        esBotonClick={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
