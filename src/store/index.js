import { configureStore } from "@reduxjs/toolkit";
import reducerAlunos from "../reducers/alunos";
import { authReducer } from "../reducers/auth";

const store = configureStore ({
    reducer : {
        matricula: reducerAlunos,
        auth: authReducer,
    }
}   
);

export default store;