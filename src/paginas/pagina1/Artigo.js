import React from 'react';

class Artigo extends React.Component{

    constructor(props){
        super(props);
        console.log(props)
        this.titulo = props.titulo
        this.conteudo = props.conteudo
    }

    render(){
        return(
            <article>
                <h2>{this.titulo}</h2>
                <p>{this.conteudo}</p>
            </article>
        )
    }
}

export default Artigo