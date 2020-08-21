import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pagina1 from './paginas/pagina1/Pagina1';
import Pagina2 from './paginas/pagina2/Pagina2';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navegador from './commom/navegador/Navegador';
import Alunos from './paginas/alunos/Alunos';
import ListarAlunos from './paginas/ListarAlunos/ListarAlunos';
import CadastroAluno from './paginas/CadastroAluno/CadastroAluno';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navegador></Navegador>
          </Route>
          <Route path="/pagina1">
            <Pagina1></Pagina1>
          </Route>
          <Route path="/pagina2">
            <Pagina2></Pagina2>
          </Route>
          <Route exact path="/alunos" component={ListarAlunos}></Route>
          <Route path="/alunos/create" component={CadastroAluno}></Route> 
          <Route path="/alunos/:matricula" component={Alunos}></Route>
          <Route path="*">
            <h1>Erro 404</h1>
          </Route>
        </Switch>
      </BrowserRouter>      
        
    </div>
  );
}

export default App;
