import React,{Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Route, BrowserRouter} from 'react-router-dom';
import MainListItemComponent from './MainListItemComponent';
import AvatarMainDashboardComponent from './AvatarMainDashboardComponent';
import MainDashboardSection from '../../Sections/MainDashboardSection';
import AddCropsSection from '../../Sections/AddCropsSection';
import MonthlyReportSection from '../../Sections/MonthlyReportSection';
import SimulationSection from '../../Sections/SimulationSection';
import CropGrowthSection from '../../Sections/CropGrowthSection';
import SelectDosificadorComponent from '../../Components/SelectDosificadorComponent';
import AddDosificadorDialogComponent from '../../Components/AddDosificadorDialogComponent';
import BottomBarMobileComponent from '../MobileView/BottomBarMobileComponent';

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
	justifyContent: 'flex-end',
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
	[theme.breakpoints.down('sm')]:{
		display: 'flex',
		justifyContent: 'center',
	},
},
drawerPaper: {
	[theme.breakpoints.down('sm')]: {
		display:'none',

	},
	position: 'relative',
	height:'100vh',
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
	width: '100%',
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

root2:{
	display:'flex',
	[theme.breakpoints.down('sm')]: {
		flexDirection:'column',

	},
},
divider: {
	marginTop: '10px',
},
containerDashboard:{
	width:'100%',
},
disableContent: {
	[theme.breakpoints.down('sm')]: {
		display:'none',
	},
},
containerCardHeader:{
	display:'flex',
	JustifyContent:'space-evenly',
	padding: '0 8px',
	alignItems: 'center',

},
});

class TemplateDashboardView extends Component {
	constructor(props){
		super(props);
		this.state={
			userName:'',
			serialsMachines:[],
			cropsUser:[]
		}
	}

	state = {
		open: true,
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	componentDidMount(){
		const userId=localStorage.getItem('id_User');
		const token =localStorage.getItem('token');
		const userName=localStorage.getItem('userName');
		this.setState({
			userName:userName
		});
		fetch('http://localhost:8080/users/userInfo',{
			method:'POST',
			mode:'cors',
			headers:{
				'Content-Type': 'application/json',
				'Authorization':token
			},
			body: JSON.stringify({"_id":userId})
		}).then((json)=>json.json())
		.then(data=>{

			this.setState({
				serialsMachines:data.payload.machinesSerial,
				cropsUser:data.payload.cropsUser
			});
			console.log("En el state: ",this.state.cropsUser);
		})
	}

	render() {
		const { classes } = this.props;
		return (




			<BrowserRouter>
			<div className={classes.root2}>
			<CssBaseline />

		{/*----------------------------Inicio contenedor appBar avatar--------------------------------------*/}

		<AppBar
		position="absolute"
		className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
		<Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
		<IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.menuButton, classes.disableContent, this.state.open && classes.menuButtonHidden,)}>
		<MenuIcon />
		</IconButton>
		<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} >
		YUM-KAAX
		</Typography>
		</Toolbar>

		</AppBar>


	{/*----------------------------Inicio contenedor navBar avatar--------------------------------------*/}

	<Drawer variant="permanent" classes={{ paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),}}open={this.state.open} >





	<div className={classes.toolbarIcon}>
	<IconButton className={classes.toolbarIconright} onClick={this.handleDrawerClose}>
	<ChevronLeftIcon />
	</IconButton>


	<div aria-label="Open drawer" className={classNames(!this.state.open && classes.menuButtonHidden,)}>
	<AvatarMainDashboardComponent/>
	<Typography variant="subheading" gutterBottom align="center">
	{this.state.userName}
	</Typography>
	</div>



	</div>


	<div className={classes.divider}>
	<Divider />
	<List>
	<MainListItemComponent/>
	</List>
	</div>
	</Drawer>
{/*----------------------------Termina contenedor navBar avatar--------------------------------------*/}


{/*----------------------------Inicio contenedor main central--------------------------------------*/}

<div className={classes.containerDashboard}>


<main className={classes.content}>
<div className={classes.appBarSpacer} />
<div className={classes.containerCardHeader}>
<SelectDosificadorComponent machineSerial={this.state.serialsMachines}/>
<AddDosificadorDialogComponent/>
</div>
<Route path="/main" exact component={MainDashboardSection}/>
<Route path="/main/add/crops" exact component={AddCropsSection}/>
<Route path="/main/add/crops/crop/growth" exact component={CropGrowthSection}/>
<Route path="/main/monthly/report"  exact component={MonthlyReportSection}/>
<Route path="/main/simulation"  exact component={SimulationSection}/>
</main>
<BottomBarMobileComponent/>

</div>
{/*----------------------------Termina contenedor main central--------------------------------------*/}
</div>
</BrowserRouter>


);
	}
}

TemplateDashboardView.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplateDashboardView);
