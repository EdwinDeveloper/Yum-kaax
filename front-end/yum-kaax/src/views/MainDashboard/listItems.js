import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

class MainListItems extends Component {
  render(){
    return(
      <div>

      <NavLink to="/main"  activeClassName="selected">
      <ListItem button>
      <ListItemIcon>
      <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
      </ListItem>
      </NavLink>

      <NavLink to="/main/Simulation" activeClassName="selected">
      <ListItem button>
      <ListItemIcon>
      <WallpaperIcon />
      </ListItemIcon>
      <ListItemText primary="Simulacion" />
      </ListItem>
      </NavLink>

      <NavLink to="/main/MonthlyReport" activeClassName="selected">

      <ListItem button>
      <ListItemIcon>
      <AssignmentTurnedInIcon />
      </ListItemIcon>
      <ListItemText primary="Reporte mensual" />
      </ListItem>
      </NavLink>

      <NavLink to="/main/AddCrops" activeClassName="selected">
      <ListItem button>
      <ListItemIcon>
      <NoteAddIcon />
      </ListItemIcon>
      <ListItemText primary="Crear cultivos" />
      </ListItem>
      </NavLink>

      <ListItem button>
      <ListItemIcon><ExitToAppIcon /></ListItemIcon>
      <ListItemText primary="Cerrar sesión" /></ListItem>

      </div>
      )
  }
}

export default MainListItems;
