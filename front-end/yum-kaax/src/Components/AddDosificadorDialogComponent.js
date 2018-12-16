import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  containerDiv: {
    display: 'flex',
  },
});

class AddDosificadorDialogComponent extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
      <Button variant="outlined" color="default" onClick={this.handleClickOpen}>
      Agregar dosificador
      </Button>
      <Dialog
      open={this.state.open}
      onClose={this.handleClose}
      aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">Agregue un nuevo dosificador</DialogTitle>
      <DialogContent>
      <DialogContentText>
      Para agreagar un nuevo dosificador, ingrese el numero de serie del producto que se encuentra en la etiquete al reverso del dispositivo.
      </DialogContentText>


      <div className={classes.containerDiv}>
      <TextField
      autoFocus
      margin="dense"
      id="name"
      label="Numero de serie del dosificador"
      type="text"
      fullWidth
      />
      <TextField
      margin="dense"
      id="name"
      label="Modelo del dosificador"
      type="text"
      fullWidth
      />
      </div>
      </DialogContent>
      <DialogActions>
      <Button onClick={this.handleClose} color="primary">
      Cancelar
      </Button>
      <Button onClick={this.handleClose} color="primary">
      Confirmar
      </Button>
      </DialogActions>
      </Dialog>
      </div>
      );
  }
}

AddDosificadorDialogComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddDosificadorDialogComponent);
