
/* 
!   manejarClic sera una función que llevara la funcionalidad del click


*/
function Boton( {texto, esBotonClick, manejarClic} ){
    return(
        <button 
        className={ esBotonClick ? "btn-clic" : "btn-reiniciar" }
        onClick = {manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;