import React from 'react';
import '../style/contador.css'

function Contador( {numClic} ){
    return(
        <div className="content-contador">
            {numClic} 
        </div>

    );
}

export default Contador;