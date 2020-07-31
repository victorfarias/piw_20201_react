import React from "react"

class BotaoComMensagem extends React.Component{
    constructor(props){
        super(props);
        this.mensagem = props.mensagem;
    }
    render(){
        return(
            <button>{this.mensagem}</button>
        )
    }
}

export default BotaoComMensagem;