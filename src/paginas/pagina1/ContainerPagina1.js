import React from 'react';
import Artigo from './Artigo';
import Botao from '../../commom/Botao/Botao';
import BotaoContador from '../../commom/Botao/BotaoContador';
import BotaoComMensagem from '../../commom/Botao/BotaoComMensagem';
import BotaoEstilizado from '../../commom/BotaoEstilizado/BotaoEstilizado';

class ContainerPagina1 extends React.Component{

    state = {
        mensagens:[
            "promocao 1", 
            "promocao 2", 
            "promocao 3", 
            "promocao 4", 
            "promocao 5", 
            "iwjinerjtn", 
        ]
    }

    artigo1FoiClicado = () => {
        window.alert("artigo 1 foi clicado");
    }

    artigo2FoiClicado = () => {
        console.log("artigo 2 foi clicado");
    }

    render(){
        let titulo1 = "dgdfgj " + " sdfdfghfd";

        let listaBotoes = [];
        for(let texto of this.state.mensagens){
            listaBotoes.push(<BotaoComMensagem mensagem={texto}></BotaoComMensagem>)
        }

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
                <BotaoContador></BotaoContador>
                <BotaoEstilizado></BotaoEstilizado>
                <div>
                    {listaBotoes}
                </div>
            </div>            
        )
    }
}

export default ContainerPagina1;