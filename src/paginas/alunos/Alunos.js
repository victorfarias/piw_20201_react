import React, { Component } from 'react'

export class Alunos extends Component {

    constructor(props){
        super(props);
        this.matricula = props.match.params.matricula;        
    }

    render() {
        return (
            <div>
                <h2>Meu aluno</h2>
                <p>Matricula: {this.matricula}</p>
            </div>
        )
    }
}

export default Alunos
