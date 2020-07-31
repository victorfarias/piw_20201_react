import React from 'react'
import './BotaoEstilizado.css'

class BotaoEstilizado extends React.Component{

    state = {
        classe: "botao-estilizado",
    }

    mudarClasse = () => {
        if(this.state.classe == "botao-estilizado"){
            this.setState({
                classe: "botao-estilizado1",
            })
        }else{
            this.setState({
                classe: "botao-estilizado",
            })
        }
    }

    render(){
        return(
            <button onClick={this.mudarClasse} class={this.state.classe}>
                Me clique com estilo
            </button>
        )
    }
}

export default BotaoEstilizado;