import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navegador from '../../commom/navegador/Navegador'
import { connect } from 'react-redux'
import './ListarAlunos.css';
import { removerAluno } from '../../actions/alunos';

export class ListarAlunos extends Component {

    constructor(props){
        super(props);
        console.log("constructor");
        this.state = {
            dados_carregados: false,
        }
    }

    componentDidMount = () => {
        // requisição para servidor
        setTimeout(() => {
            this.setState({
                dados_carregados: true,
            })
        }, 3000);
        console.log("componentDidMount");
    }

    componentDidUpdate = () => {
        console.log("componentDidUpdate");
    }

    render() {
        console.log("render");
        console.log(this.props.alunos);
        let listaLinhasTabela = [];
        for(let aluno of this.props.alunos){
            let linha = (<tr key={aluno.matricula}>
                <td>
                    <Link to={"/alunos/"+aluno.matricula}>{aluno.nome}</Link>
                </td>
                <td>
                    {aluno.matricula}
                </td>
                <td>
                    <button onClick={()=>{this.props.removerAlunoprops(aluno.matricula)}} className="delete-button">x</button>
                </td>
            </tr>)
            listaLinhasTabela.push(linha);
        }

        let tabela = 
        (<table className="tabela-alunos">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Matricula</th>
                </tr>
            </thead>
            <tbody>
                {listaLinhasTabela}
            </tbody>
        </table>);

        return (            
            <div>
                <Navegador></Navegador>
                {this.state.dados_carregados == true ? tabela : <h3>Carregando...</h3>}
            </div>
        )
    }
}

const mapearEstadoParaProps = (state, props) => {
    return {"alunos" : state.matricula.alunos};
}

const mapDispatchToProps = (dispatch) => {
    return {
        removerAlunoprops: (matricula) => {
            dispatch(removerAluno({matricula: matricula}));
        }
    }
}

export default connect(mapearEstadoParaProps, mapDispatchToProps)(ListarAlunos);
