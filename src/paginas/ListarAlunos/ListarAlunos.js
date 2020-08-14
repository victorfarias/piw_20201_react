import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navegador from '../../commom/navegador/Navegador'
import { connect } from 'react-redux'

export class ListarAlunos extends Component {

    constructor(props){
        super(props);
        this.alunos = props.alunos;
    }

    render() {

        let listaLinhasTabela = [];
        for(let aluno of this.alunos){
            let linha = (<tr>
                <td>
                    <Link to={"/alunos/"+aluno.matricula}>{aluno.nome}</Link>
                </td>
                <td>
                    {aluno.matricula}
                </td>
            </tr>)
            listaLinhasTabela.push(linha);
        }

        return (            
            <div>
                <Navegador></Navegador>
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>Matricula</th>
                    </tr>
                    {listaLinhasTabela}
                    {/* <tr>
                        <td>
                            <Link to="/alunos/123456">João</Link>
                        </td>
                        <td>123456</td>
                    </tr>         
                    <tr>
                        <td>
                            <Link to="/alunos/654321">Maria</Link>
                        </td>
                        <td>654321</td>
                    </tr>                                         */}
                </table>
            </div>
        )
    }
}

const mapearEstadoParaProps = (state, props) => {
    return {"alunos" : state.alunos};
}

export default connect(mapearEstadoParaProps)(ListarAlunos);
