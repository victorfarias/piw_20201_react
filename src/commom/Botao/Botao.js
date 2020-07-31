import React from 'react';
import './Botao.css';

class Botao extends React.Component{

    // foiClicado() {
    //     console.log("Fui clicado");    
    //     window.alert("Fui clicado");
    // }

    foiClicado = () => {
        console.log("Fui clicado");    
        window.alert("Fui clicado");
    }

    render(){
        return(
            <button class="botao-verde"
                onClick={this.foiClicado}
            >Me clique</button>
        )
    }
}

export default Botao;