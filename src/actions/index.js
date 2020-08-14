import { ADICIONAR_ALUNO } from "../constants";

export function adicionarAluno(payload) {
    return {type: ADICIONAR_ALUNO, payload:payload}
}