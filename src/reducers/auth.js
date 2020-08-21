import { createReducer } from "@reduxjs/toolkit"
import { login, logout } from "../actions/auth"

const auth_initial_state = {
    logado: false,
}

export const authReducer = createReducer(auth_initial_state, {
    [login]: (state, action) => {
        state.logado = true;
    },
    [logout]: (state, action) => {
        state.logado = false;
    }
})