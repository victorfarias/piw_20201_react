const { createStore } = require("redux");
const { default: reducerRaiz } = require("../reducers");

const store = createStore(reducerRaiz);

export default store;