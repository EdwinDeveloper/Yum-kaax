import React, {Component} from 'react';
import AppBarTop from './appBar';
import FormRegister from './formularioRegistro';
import BottomAppBar from './bottomAppBar';

//Inicio del componente clase LoginRegisterComponent
class LoginRegisterComponent extends Component {
  render() {
    return (
      <div className="React">
{/*Declaracion de componentes que conforman los campos del login y el registro de usuario por su tag o selector*/}
      <AppBarTop/>
      <FormRegister/>
      <BottomAppBar/>
      </div>
      );
  }
}

//Exportacion de la clase LoginRegisterComponent
export default LoginRegisterComponent;
