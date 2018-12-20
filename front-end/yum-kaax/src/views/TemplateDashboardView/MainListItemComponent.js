import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import HomeIcon from '@material-ui/icons/Home';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import LogoutDialogComponent from '../../Components/LogoutDialogComponent';


const styles = theme => ({
  ListItemText:{
    textDecoration:'none',
  },
});

class MainListItemComponent extends Component {
  render(){

    return(
      <div>

      <NavLink to="/main" activeClassName="selected" style={{ textDecoration: 'none' }}>
      <ListItem button>
      <ListItemIcon>
      <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="inicio" />
      </ListItem>
      </NavLink>

      <NavLink to="/main/simulation" activeClassName="selected" style={{ textDecoration: 'none' }}>
      <ListItem button>
      <ListItemIcon>
      <WallpaperIcon />
      </ListItemIcon>
      <ListItemText primary="simulacion" />
      </ListItem>
      </NavLink>

      <NavLink to="/main/monthly/report" activeClassName="selected" style={{ textDecoration: 'none' }}>

      <ListItem button>
      <ListItemIcon>
      <AssignmentTurnedInIcon />
      </ListItemIcon>
      <ListItemText primary="Reporte mensual" />
      </ListItem>
      </NavLink>

      <NavLink to="/main/add/crops" activeClassName="selected" style={{ textDecoration: 'none' }}>
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

export default MainListItemComponent;
