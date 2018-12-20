import React, { Component } from 'react';
import lightGreen from '@material-ui/core/colors/lightGreen';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import MainLoginMobileView from './Views/MobileView/LoginMobileView';
import LoginRegisterView from './Views/LoginView';
import Error404View from './Views/Error404View';
import TemplateDashboardView from './Views/TemplateDashboardView';
import './App.css';

//Inicio del tema color lightGreen para todo el proyecto
const theme = createMuiTheme({
    typography: {
    useNextVariants: true,
  },
  palette: {
    primary: lightGreen,
   secondary: {
      main: 'rgba(169, 93, 44, 1)',
    },
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
        <Route path="/" exact component={LoginRegisterView}/>
        <Route path="/login" exact  component={LoginRegisterView}/>
        <Route path="/main"   component={TemplateDashboardView}/>
        <Route path="/mainMobile" exact component={MainLoginMobileView}/>
        <Route path="/*" exact component={Error404View}/>
        </Switch>
      </MuiThemeProvider>
      </BrowserRouter>

      );
  }
}

//Exportacion de la clase App
export default App;
