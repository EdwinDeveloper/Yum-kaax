import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import classNames from 'classnames';
import MainListItems from '../../TemplateDashboardView/listItems';

const styles = theme => ({
  fullList: {
    width: 'auto',
  },
  appBar: {
    display:'none',
    top: 'auto',
    bottom: 0,
    height: '50px',
    [theme.breakpoints.down('sm')]: {
      display:'flex',
    },
  },

});

class BottomBarMobileComponent extends React.Component {
  state = {
    bottom: false,

  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
      <List><MainListItems/></List>
      </div>
      );

    return (
      <div>
      <AppBar className={classes.appBar}>
      <Button onClick={this.toggleDrawer('bottom', true)}>    <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.menuButton, this.state.open && classes.menuButtonHidden,)}>
      <ExpandLessIcon />
      </IconButton>
      </Button>
      </AppBar>
      <Drawer
      anchor="bottom"
      open={this.state.bottom}
      onClose={this.toggleDrawer('bottom', false)}
      >
      <div
      tabIndex={0}
      onClick={this.toggleDrawer('bottom', false)}
      onKeyDown={this.toggleDrawer('bottom', false)}
      >
      {fullList}
      </div>
      </Drawer>
      </div>
      );
  }
}

BottomBarMobileComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomBarMobileComponent);
