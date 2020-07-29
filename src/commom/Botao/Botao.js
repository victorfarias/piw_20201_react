import React from 'react';

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
            <button
                onClick={this.foiClicado}
            >Me clique</button>
        )
    }
}

export default Botao;