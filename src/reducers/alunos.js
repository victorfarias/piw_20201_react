// import { ADICIONAR_ALUNO } from "../constants";
import { createReducer } from "@reduxjs/toolkit";
import { adicionarAluno, removerAluno, fetchAlunosSucesso, fetchAlunosIniciado } from "../actions/alunos";

const estadoInicial = {
    alunos: null,
    disciplinas : null,
}

const reducerAlunos = createReducer(estadoInicial, {  
    [fetchAlunosIniciado]: (state, action) => {
        state.alunos = null;
    },
    [fetchAlunosSucesso]: (state, action) => {
        state.alunos = action.payload;
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