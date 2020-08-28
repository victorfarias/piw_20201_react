// import { ADICIONAR_ALUNO } from "../constants";

import axios from "axios";

const { createAction } = require("@reduxjs/toolkit");

const url_base = "http://rest.learncode.academy/api/ufc/alunos";

// export function adicionarAluno(payload) {
//     return {type: ADICIONAR_ALUNO, payload:payload}
// }

export const fetchAlunosIniciado = createAction("FETCH_ALUNOS_INICIADO");
export const fetchAlunosSucesso = createAction("FETCH_ALUNOS_SUCESSO");

export const fetchAlunos = () => {
    return (dispatch, getState) => {
        dispatch(fetchAlunosIniciado());
        axios({
            method: 'GET',
            url: url_base,
        }).then((response) => {
            dispatch(fetchAlunosSucesso(response.data));
        });
    }
}

export const adicionarAluno = (aluno) => {
    return (dispatch, getState) => {
        axios({
            method: 'POST',
            url: url_base,
            data: aluno
        }).then((response) => {
            console.log("ADICIONAR FUNFOU!");
        })
    }
}

export const removerAluno = (id) => {
    return (dispatch, getState) =>{
        axios({
            method: "DELETE",
            url: url_base + "/" + id
        }).then((response) =>{
            console.log("DELETE FUNFOU");
            console.log(response);
            dispatch(fetchAlunos());
        })
    }
};