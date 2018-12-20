import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

class BtnGenerateReportComponent extends Component {
  state = {
    open: false,
    scroll: 'paper',
  };


  render() {
    return (
      <div>
      <Button color="secondary">
      <OpenInBrowserIcon />  Generar Reporte
      </Button>

      </div>
      );
  }
}

export default BtnGenerateReportComponent;
