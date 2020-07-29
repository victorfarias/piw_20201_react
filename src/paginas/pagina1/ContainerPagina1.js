import React from 'react';
import Artigo from './Artigo';

class ContainerPagina1 extends React.Component{
    render(){
        let titulo1 = "dgdfgj " + " sdfdfghfd";
        return(
            <div>
                <Artigo 
                    titulo={titulo1}
                    conteudo="Conteudo do artigo 1">                        
                </Artigo>
                <Artigo
                    titulo="Titulo do artigo 2"
                    conteudo="Conteudo do artigo 2"
                ></Artigo>
            </div>
        )
    }
}

export default ContainerPagina1;