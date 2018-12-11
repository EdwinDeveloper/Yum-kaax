import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import lightGreen from '@material-ui/core/colors/lightGreen';
import LoginRegisterComponent from './views/login';
import error404 from './views/error404';
import MainDashboard from './views/MainDashboard';
import SliderExampleControlled from './views/mobile/loginMobile';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';

//Inicio del tema color lightGreen para todo el proyecto
const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
  typography: {
    useNextVariants: true,
  },
})

//Inicio del componente clase App
// Linea 22 MuiThemeProvider es la etiqueta para la creacion del theme (es obligatorio mandar a llamar el objeto de la funcion theme con su atributo como theme )
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Switch>
        <Route path="/" exact component={LoginRegisterComponent}/>
        <Route path="/login" exact component={LoginRegisterComponent}/>
        <Route path="/main" exact component={MainDashboard}/>
        <Route path="/mobile" exact component={SliderExampleControlled}/>
        <Route path="/*" exact component={error404}/>

        </Switch>
      </MuiThemeProvider>
      </BrowserRouter>
      );
  }
}

//Exportacion de la clase App
export default App;
