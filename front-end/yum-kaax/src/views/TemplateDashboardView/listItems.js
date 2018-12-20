import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import LogoutDialogComponent from '../../Components/LogoutDialogComponent';


const styles = theme => ({
  ListItemText:{
    textDecoration:'none',
  },
});

class MainListItems extends Component {
  render(){

    return(
      <div>

      <NavLink to="/main" activeClassName="selected" style={{ textDecoration: 'none' }}>
      <ListItem button>
      <ListItemIcon>
      <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
      </ListItem>
      </NavLink>

      <NavLink to="/main/Simulation" activeClassName="selected" style={{ textDecoration: 'none' }}>
      <ListItem button>
      <ListItemIcon>
      <WallpaperIcon />
      </ListItemIcon>
      <ListItemText primary="Simulacion" />
      </ListItem>
      </NavLink>

      <NavLink to="/main/MonthlyReport" activeClassName="selected" style={{ textDecoration: 'none' }}>

      <ListItem button>
      <ListItemIcon>
      <AssignmentTurnedInIcon />
      </ListItemIcon>
      <ListItemText primary="Reporte mensual" />
      </ListItem>
      </NavLink>

      <NavLink to="/main/AddCrops" activeClassName="selected" style={{ textDecoration: 'none' }}>
      <ListItem button>
      <ListItemIcon>
      <NoteAddIcon />
      </ListItemIcon>
      <ListItemText primary="Crear cultivos" />
      </ListItem>
      </NavLink>
      <LogoutDialogComponent/>

      </div>
      )
  }
}

export default MainListItems;
