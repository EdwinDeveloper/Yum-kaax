import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DeleteIcon from '@material-ui/icons/Delete';

class DeleteCropCard extends Component {
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
    const { fullScreen } = this.props;

    return (
      <div>


              <Button color="secondary" onClick={this.handleClickOpen} size="small">
      <DeleteIcon />Eliminar
      </Button>



        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Confirmación"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ¿Estas seguro de borrar el historial de este cultivo?
              Si borra este cultivo se perderan los cambios de manera permanente.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancelar
            </Button>
            <Button onClick={this.handleClose} color="secondary" autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DeleteCropCard.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(DeleteCropCard);
