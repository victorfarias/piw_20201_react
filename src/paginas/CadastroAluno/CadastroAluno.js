import React, { Component } from 'react'
import Navegador from '../../commom/navegador/Navegador'
import { connect } from 'react-redux'
import { adicionarAluno } from '../../actions/alunos';
import axios from 'axios';

const url_base = "http://rest.learncode.academy/api/ufc/alunos";

class CadastroAluno extends Component {

    state = {
        nome: "",
        matricula: "",
    }    

    componentDidMount = () =>{     
    }

    modificouFormulario = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        })
    }

    submeterFormulario = (event) => {
        event.preventDefault();
        this.props.adicionarAlunoprops({
            nome: this.state.nome,
            matricula: this.state.matricula,
        });
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
        adicionarAlunoprops: (aluno) => {
            dispatch(adicionarAluno(aluno))
        }
    };
}

export default connect(null, mapDispatchToProps)(CadastroAluno)
