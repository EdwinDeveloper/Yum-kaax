import React, {Component} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  buttonAdd:{
    backgroundColor: 'rgba(139, 195, 74, 1)',
  }
});
class AddCropButtonComponent extends Component {
  render(){
    const { classes } = this.props;

    return(
     <Tooltip title="Agregar nuevo cultivo" aria-label="Agregar nuevo cultivo">
     <div className="classes.buttonAdd">
     <Fab color="secondary" className={classes.absolute}>
     <AddIcon />
     </Fab>
     </div>
     </Tooltip>
     )
  }
}

AddCropButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCropButtonComponent);
