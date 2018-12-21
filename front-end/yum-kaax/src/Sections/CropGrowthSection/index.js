import React, { Component } from 'react';
import BarChartComponent from '../../Components/Charts/BarChartComponent';
import { withStyles } from '@material-ui/core/styles';
import logo2 from '../../Assets/Img/Background/exampleCrop.png';
import Typography from '@material-ui/core/Typography';
import CardCropGrowthComponent from '../../Components/CardCropGrowthComponent';

const styles = theme => ({
  containerMain: {
    display: 'flex',
    padding: '0 8px',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bigAvatar: {
    width: '230px',
    height: '230px',
    marginTop: '-91px',
  },
  formControl: {
    display: 'flex',
    padding: '0 8px',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  componentCards: {
    display: 'flex',
  },
  cards:{
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
  }
});

class CropGrowthSection extends Component{
  state= {
    typeCrop: 'Moringa',
  }
  render(){
    const { classes } = this.props;

    return(
      <div>
      <Typography component="h1" value={this.state.age} variant="h6" color="inherit"  className={classes.formControl} >
      Crecimiento del cultivo: Planta de {this.state.typeCrop}
      </Typography>
      <div className={classes.containerMain}>
      <BarChartComponent/>
      <div>
      <img alt="Remy Sharp" src={logo2} className={classes.bigAvatar} />
      </div>
      </div>
      <div className= {classes.componentCards}>
      <div className={classes.cards}>
      <CardCropGrowthComponent/>
      <CardCropGrowthComponent/>
      <CardCropGrowthComponent/>
      <CardCropGrowthComponent/>
      </div>
      </div>
      </div>
      )
  }
}

export default withStyles(styles, { withTheme: true })(CropGrowthSection);

