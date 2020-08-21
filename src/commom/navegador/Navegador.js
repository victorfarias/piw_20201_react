import React from 'react';
import "./Navegador.css";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/auth';

class Navegador extends React.Component{

    alternarLogado = () => {
        if(this.props.logado == true){
            this.props.logout();
        }else{
            this.props.login();
        }
    }

    render(){
        console.log(this.props.logado);
        return (
            <nav className="navegador-principal">
                <div className="esquerda">
                    <span className="logo">Social PIW</span>
                    <NavLink to="/pagina1">Pagina 1</NavLink>
                    <NavLink to="/pagina2">Pagina 2</NavLink>
                    <NavLink to="/alunos">Listar Alunos</NavLink>
                    <NavLink to="/alunos/create">Listar Alunos</NavLink>
                </div>
                <div onClick={this.alternarLogado} className="direita">
                    <button>{this.props.logado == true ? "Logout" : "Login"}</button>
                </div>
                
            </nav>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        logado: state.auth.logado,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch(login())
        },
        logout: () => {
            dispatch(logout())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navegador);