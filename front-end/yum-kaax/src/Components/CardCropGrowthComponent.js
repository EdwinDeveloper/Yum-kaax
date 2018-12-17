import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import InfoCardDialogComponent from '../Components/InfoCardDialogComponent';

const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: 'rgba(162,191,105,1)',
    },
  },
  typography: { useNextVariants: true
  },
});


const styles = theme => ({


  card: {
    margin: '10px',

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'rgba(169, 93, 44, 1)',
  },
  cardContent:{
    backgroundColor: 'rgba(162,191,105,.4)',
    paddingBottom: '8px',
  },
  cardHeader:{

  },
  badge: {
    top: '-12px',
    right: '-8px',
    width: '13px',
    height: '13px',
  },
  padding: {
    padding: '10px !important',
  },

  cardContentTxt: {
    padding: '0px 3px 0px 3px !important',

  }

});

class CardCropGrowthComponent extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card }>
      <div className={classes.cardContent}>
      <CardHeader className={classes.cardHeader}
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
        R
        </Avatar>
      }
      action={
        <div className={classes.padding}>
        <Badge color="primary" badgeContent={''} classes={{ badge: classes.badge }}>
        <Typography >Completado</Typography>
        </Badge>
        </div>
      }
      title="Cultivo de cebolla"
      subheader="September 14, 2016"
      />
      <CardContent className={classes.cardContentTxt}>
      <Typography component="p">
      Cultivo de cebolla colocado el dia 11 de noviembre del 2018, finalizado el dia 15 de diciembre por el usuario.
      </Typography>
      </CardContent>
      </div>
      <MuiThemeProvider theme={outerTheme}>
      <CardActions className={classes.actions} disableActionSpacing>
      <InfoCardDialogComponent/>
      </CardActions>
      </MuiThemeProvider>
      </Card>
      );
  }
}
CardCropGrowthComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CardCropGrowthComponent);
