import React from 'react';

class Pessoa extends React.Component{
    render(){
        let nome = "joao";
        return (<div> componente pessoa {nome} {1+2} {"joao" + "maria"} </div>);
    }
}

export default Pessoa;