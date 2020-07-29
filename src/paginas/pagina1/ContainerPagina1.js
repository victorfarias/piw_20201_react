import React from 'react';
import Artigo from './Artigo';
import Botao from '../../commom/Botao/Botao';

class ContainerPagina1 extends React.Component{

    artigo1FoiClicado = () => {
        window.alert("artigo 1 foi clicado");
    }

    artigo2FoiClicado = () => {
        console.log("artigo 2 foi clicado");
    }

    render(){
        let titulo1 = "dgdfgj " + " sdfdfghfd";
        return(
            <div>
                <Artigo
                    titulo={titulo1}
                    conteudo="Conteudo do artigo 1"
                    mensagem="Mensagem do primeiro artigo"
                    clicado={this.artigo1FoiClicado}
                >
                </Artigo>
                <Artigo
                    titulo="Titulo do artigo 2"
                    conteudo="Conteudo do artigo 2"
                    mensagem="Mensagem do segundo artigo"
                    clicado={this.artigo2FoiClicado}
                ></Artigo>
                <Botao></Botao>
            </div>            
        )
    }
}

export default ContainerPagina1;