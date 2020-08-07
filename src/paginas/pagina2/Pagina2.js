import React, { Component } from 'react'
import Navegador from '../../commom/navegador/Navegador';

export class Pagina2 extends Component {
    render() {
        return (
            <div>
                <Navegador></Navegador>
                <ul>
                    <li>João</li>
                    <li>Maria</li>
                    <li>Tadeu</li>
                </ul>
            </div>
        )
    }
}

export default Pagina2;
