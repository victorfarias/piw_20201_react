import { ADICIONAR_ALUNO } from "../constants";

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

function reducerRaiz(state = estadoInicial, action){
    if(action.type == ADICIONAR_ALUNO){
        let new_state = {...state};
        new_state.alunos.push({
            nome: action.payload.nome,
            matricula: action.payload.matricula,
        })
        return new_state;
    }
    return state;
}

export default reducerRaiz;