import React from 'react';
import Navegador from '../../commom/navegador/Navegador';
import ContainerPagina1 from './ContainerPagina1';

class Pagina1 extends React.Component{
    render(){
        return(
            <div>
                <Navegador></Navegador>
                <ContainerPagina1></ContainerPagina1>
            </div>            
        )        
    }
}

export default Pagina1;