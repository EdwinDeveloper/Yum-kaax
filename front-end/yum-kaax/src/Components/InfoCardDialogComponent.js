import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import logo3 from '../Assets/Img/Background/exampleCrop.png';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

  img: {
    height: 200,
    maxWidth: 200,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },

  subTitle: {
    fontSize: '.9rem',
    color: '#979797',
    textAlign:'center',
  },

});


class InfoCardDialogComponent extends Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>


      <Button onClick={this.handleClickOpen('paper')} size="small" color="secondary">
      <OpenInBrowserIcon />  Historial
      </Button>
      <Dialog
      open={this.state.open}
      onClose={this.handleClose}
      scroll={this.state.scroll}
      aria-labelledby="scroll-dialog-title"
      >
      <DialogTitle id="scroll-dialog-title">Historial</DialogTitle>

      <Typography component="h5" variant="h5" color="inherit"  className={classes.subTitle} >
      Planta de Moringa
      </Typography>
      <div>
      <img alt="Remy Sharp" src={logo3} className={classes.img}/>
      </div>

      <DialogContent>
      <DialogContentText>
      La moringa, considerada un antibiótico natural, es una planta con múltiples usos y beneficios medicinales. Sus propiedades antiinflamatorias, antimicrobianas, antioxidantes, anticancerígenas, cardiovasculares, y hepatoprotectoras, la hacen útil en el tratamiento de diversas enfermedades.
      </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button onClick={this.handleClose} color="secondary">
      Cancelar
      </Button>
      <Button onClick={this.handleClose} color="secondary">
      Aceptar
      </Button>
      </DialogActions>
      </Dialog>
      </div>
      );
  }
}

export default withStyles(styles, { withTheme: true })(InfoCardDialogComponent);
