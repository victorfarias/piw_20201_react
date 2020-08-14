import React, { Component } from 'react'
import Navegador from '../../commom/navegador/Navegador'
import { connect } from 'react-redux'
import { adicionarAluno } from '../../actions'

class CadastroAluno extends Component {

    state = {
        nome: "",
        matricula: "",
    }

    constructor(props) {
        super(props);
        console.log(props);
        this.adicionarAluno = props.adicionarAlunoprops;
    }

    modificouFormulario = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        })
        console.log(this.state);
    }

    submeterFormulario = (event) => {
        event.preventDefault();
        this.adicionarAluno(this.state.nome, this.state.matricula);
        this.setState({
            nome: "",
            matricula: "",
        })        
    }

    render() {
        return (
            <div>
                <Navegador></Navegador>
                <form onSubmit={this.submeterFormulario}>
                    Nome: <input id="nome" onChange={this.modificouFormulario} type="text" value={this.state.nome}/> <br/>
                    Matricula: <input id="matricula" onChange={this.modificouFormulario} type="text" value={this.state.matricula}/> <br/>
                    <button type="submit">Submeter</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    // dispatch despacha ação para reducer
    // Recebe uma ação
    return {
        adicionarAlunoprops: (nome, matricula) => {
            dispatch(adicionarAluno({nome:nome, matricula:matricula}))
        }
    };
}

export default connect(null, mapDispatchToProps)(CadastroAluno)
