// import { ADICIONAR_ALUNO } from "../constants";
import { createReducer } from "@reduxjs/toolkit";
import { adicionarAluno, removerAluno } from "../actions/alunos";

const estadoInicial = {
    alunos: [
        {
            "nome":"joao",
            "matricula":"123"
        },
        {
            "nome":"Maria",
            "matricula":"456"
        },
    ],
    disciplinas : [
        {"nome":"PIW", "codigo":"QXD1234"},
        {"nome":"LMS", "codigo":"QXD4321"},
    ]
}

const reducerAlunos = createReducer(estadoInicial, {
    [adicionarAluno] : (state, action) => {
        state.alunos.push({
            nome: action.payload.nome,
            matricula: action.payload.matricula,
        })
    },
    [removerAluno]: (state, action) => {        
        let index = state.alunos.findIndex((aluno)=>(aluno.matricula == action.payload.matricula));
        state.alunos.splice(index, 1);        
        console.log(state.alunos);
    }
})



// function reducerAlunos(state = estadoInicial, action){
//     if(action.type == ADICIONAR_ALUNO){
//         let new_state = {...state};
//         new_state.alunos.push({
//             nome: action.payload.nome,
//             matricula: action.payload.matricula,
//         })
//         return new_state;
//     }
//     return state;
// }

export default reducerAlunos;