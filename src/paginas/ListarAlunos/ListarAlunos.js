import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navegador from '../../commom/navegador/Navegador'
import { connect } from 'react-redux'
import './ListarAlunos.css';
import { removerAluno, fetchAlunos } from '../../actions/alunos';
// /src/paginas/ListarAlunos/ListarAlunos.js
export class ListarAlunos extends Component {

    componentDidMount = () => {
        this.props.fetchAlunos();
    }

    componentDidUpdate = () => {
        console.log("componentDidUpdate");
    }

    render() {        
        let listaLinhasTabela = [];
        console.log("reder de listaralunos");
        console.log(this.props);
        if(this.props.alunos != null){
            for(let aluno of this.props.alunos){
                let linha = (<tr key={aluno.matricula}>
                    <td>
                        <Link to={"/alunos/"+aluno.matricula}>{aluno.nome}</Link>
                    </td>
                    <td>
                        {aluno.matricula}
                    </td>
                    <td>
                        <button onClick={()=>{this.props.removerAlunoprops(aluno.id)}} className="delete-button">x</button>
                    </td>
                </tr>)
                listaLinhasTabela.push(linha);
            }
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

        const loading = <div className="loading"></div>;

        return (            
            <div>
                <Navegador></Navegador>
                {this.props.alunos == null? loading : tabela}                
            </div>
        )
    }
}

const mapearEstadoParaProps = (state, props) => {
    return {alunos : state.matricula.alunos};
}

const mapDispatchToProps = (dispatch) => {
    return {
        removerAlunoprops: (id) => {
            dispatch(removerAluno(id));
        },
        fetchAlunos: () =>{
            dispatch(fetchAlunos());
        }
    }
}

export default connect(mapearEstadoParaProps, mapDispatchToProps)(ListarAlunos);
