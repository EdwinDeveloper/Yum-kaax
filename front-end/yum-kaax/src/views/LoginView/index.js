import React, {Component} from 'react';
import AppBarLoginComponent from './AppBarLoginComponent';
import FormRegisterComponent from './FormRegisterComponent';
import BottomAppBarComponent from './BottomAppBarComponent';

//Inicio del componente clase LoginRegisterComponent
class LoginRegisterView extends Component {
  render() {
    return (
      <div className="React">
    {/*Declaracion de componentes que conforman los campos del login y el registro de usuario por su tag o selector*/}
    <AppBarLoginComponent history={this.props.history}/>
    <FormRegisterComponent/>
    <BottomAppBarComponent/>
    </div>
    );
  }
}

//Exportacion de la clase LoginRegisterComponent
export default LoginRegisterView;
