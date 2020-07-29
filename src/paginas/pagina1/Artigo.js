import React from 'react';

class Artigo extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.titulo = props.titulo;
        this.conteudo = props.conteudo;
        this.mensagem = props.mensagem;
        this.clicado = props.clicado;
    }

    // fuiClicadoDuplo(){
    //     window.alert("Clique duplo no título");
    // }

    fuiClicadoDuplo = () => {
        window.alert(this.mensagem);        
    }

    artigoClicado = () => {
        console.log("metodo artigoClicado");
        this.clicado();
    }

    render(){
        return(
            <article onClick={this.artigoClicado}>
                <h2
                    onDoubleClick={this.fuiClicadoDuplo}
                >{this.titulo}</h2>
                <p>{this.conteudo}</p>
            </article>
        )
    }
}

export default Artigo