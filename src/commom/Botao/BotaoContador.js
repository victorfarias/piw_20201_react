import React from 'react'
// JSX
class BotaoContador extends React.Component{

    // Atributos - inicializar o estado
    state = {
        cliques: 0,
        crescente: true,
    }

    incrementarCliques = () => {
        // this.setState({
        //     cliques: this.state.cliques + 1,
        // })        
        // if (this.state.cliques == 0){
        //     this.setState({
        //         cliques: 1,
        //     })
        // }else{
        //     this.setState({
        //         cliques: 0,
        //     })
        // }

        // 0,1,2,3,4,5,4,3,2,1,0,1,2,3,4,5,4,3,2...
        let novo_cliques = -1;
        if(this.state.crescente == true){
            novo_cliques = this.state.cliques + 1;            
        }else{
            novo_cliques = this.state.cliques - 1;
        }

        let novo_crescente = undefined;
        if(novo_cliques==5){
            novo_crescente = false;
        }else if(novo_cliques == 0){
            novo_crescente = true;
        }else{
            novo_crescente = this.state.crescente;
        }

        this.setState({
            cliques: novo_cliques,
            crescente: novo_crescente,
        })

    }

    // Métodos
    render(){
        return(
            <button onClick={this.incrementarCliques}> 
                Cliques: {this.state.cliques}
            </button>
        )
    }
}

export default BotaoContador;