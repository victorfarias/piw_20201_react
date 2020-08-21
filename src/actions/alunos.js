// import { ADICIONAR_ALUNO } from "../constants";

const { createAction } = require("@reduxjs/toolkit");

// export function adicionarAluno(payload) {
//     return {type: ADICIONAR_ALUNO, payload:payload}
// }

export const adicionarAluno = createAction("ADICIONAR_ALUNO");
export const removerAluno = createAction("REMOVER_ALUNO");