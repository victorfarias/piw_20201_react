import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navegador from '../../commom/navegador/Navegador'

export class ListarAlunos extends Component {
    render() {
        return (
            <div>
                <Navegador></Navegador>
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>Matricula</th>
                    </tr>
                    <tr>
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
                    </tr>                                        
                </table>
            </div>
        )
    }
}

export default ListarAlunos
