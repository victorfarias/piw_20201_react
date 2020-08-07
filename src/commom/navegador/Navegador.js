import React from 'react';
import "./Navegador.css";
import { NavLink } from 'react-router-dom';

class Navegador extends React.Component{
    render(){
        return (
            <nav class="navegador-principal">
                <span class="logo">Social PIW</span>
                <NavLink to="/pagina1">Pagina 1</NavLink>
                <NavLink to="/pagina2">Pagina 2</NavLink>
                <NavLink to="/alunos">Listar Alunos</NavLink>
            </nav>
        )
    }
}

export default Navegador;