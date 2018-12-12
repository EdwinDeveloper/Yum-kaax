import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './listItems';
import './MainDashboard.css';
import LetterAvatars from './AvatarMainDashboard';
import Typography from '@material-ui/core/Typography';
import Dashboard from '../dashboard';
import AddCrops from '../addCrops';
import MonthlyReport from '../monthlyReport';
import Simulation from '../simulation';

const drawerWidth = 240;



const styles = theme => ({
	root: {
		display: 'flex',
	},
	toolbar: {
paddingRight: 24, // keep right padding when drawer closed
},
toolbarIconright:{
	display: 'flex',
	direction:'column',
	justify:'flex-end',
	alignItems:'flex-end',
},
toolbarIcon: {
	display: 'flex',
	padding: '0 8px',
	alignItems: 'center',
	flexDirection: 'column',
	justifyContent: 'flex-end',
	marginBottom: '16px',
	marginTop: '16px',
},
appBar: {
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
		marginBottom: '80px',
	}),
},
appBarShift: {
	marginLeft: drawerWidth,
	width: `calc(100% - ${drawerWidth}px)`,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
},
menuButton: {
	marginLeft: 12,
	marginRight: 36,
},
menuButtonHidden: {
	display: 'none',
},
title: {
	flexGrow: 1,
},
drawerPaper: {
	position: 'relative',
	whiteSpace: 'nowrap',
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
},
drawerPaperClose: {
	overflowX: 'hidden',
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	width: theme.spacing.unit * 7,
	[theme.breakpoints.up('sm')]: {
		width: theme.spacing.unit * 9,
	},
},
appBarSpacer: theme.mixins.toolbar,
content: {
	flexGrow: 1,
	padding: theme.spacing.unit * 3,
	height: '100vh',
	overflow: 'auto',
},
chartContainer: {
	marginLeft: -22,
},
tableContainer: {
	height: 320,
},
h5: {
	marginBottom: theme.spacing.unit * 2,
},
});

class MainDashboard extends Component {
	state = {
		open: true,
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
			<CssBaseline />

		{/*----------------------------Inicio contenedor appBar avatar--------------------------------------*/}

		<AppBar
		position="absolute"
		className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
		<Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
		<IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.menuButton, this.state.open && classes.menuButtonHidden,)}>
		<MenuIcon />
		</IconButton>
		<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} >
		MainDashboard
		</Typography>
		</Toolbar>
		</AppBar>





	{/*----------------------------Inicio contenedor navBar avatar--------------------------------------*/}

	<Drawer variant="permanent" classes={{ paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),}}open={this.state.open} >
	<div className={classes.toolbarIcon}>
	<IconButton className={classes.toolbarIconright} onClick={this.handleDrawerClose}>
	<ChevronLeftIcon />
	</IconButton>
	<LetterAvatars/>
	<Typography variant="subheading" gutterBottom align="center">
	Kevin Arroyo
	</Typography>
	</div>
	<Divider />
	<List>{mainListItems}</List>
	</Drawer>

{/*----------------------------Termina contenedor navBar avatar--------------------------------------*/}


{/*----------------------------Inicio contenedor main central--------------------------------------*/}

<main className={classes.content}>
<div className={classes.appBarSpacer} />
<Dashboard/>
<AddCrops/>
<MonthlyReport/>
<Simulation/>











</main>

{/*----------------------------Termina contenedor main central--------------------------------------*/}


</div>
);
	}
}

MainDashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainDashboard);
