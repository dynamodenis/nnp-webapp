import React,{useState, useEffect} from "react";
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


import UsersTable from "./UsersTable";
import Consultants from "./consultants/Consultants";
import Vendors from "./vendors/Vendors";
import SMEs from "./smes/SMEs";

// Redux
import {connect} from 'react-redux'
import { loadUserRoles,loadUsers } from '../../redux/actions/users';
import { loadVendors } from "../../redux/actions/vendors";

function UserManagement(props) {
  const {loadUserRoles,loadUsers,loadVendors} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // get all data
  useEffect(() => {
    loadUserRoles()
    loadUsers()
    loadVendors()
  },[])
  return (
    <div>
      <div className="pb-3">
        <h2 className="font-semibold text-xl">Users Management</h2>
      </div>
  
      <div className="profile_details_rowTwo">
        <div className={classes.root}>
            <Tabs
            value={value}
            onChange={handleChange}
            classes={{
                indicator:classes.indicator
            }}
            >
                <Tab label={<span className={`${classes.tabRoot} tabs_labels`}>Users</span>} {...a11yProps(0)}/>
                <Tab label={<span className={classes.tabRoot}>Consultants</span>} {...a11yProps(1)} />
                <Tab label={<span className={classes.tabRoot}>Vendors</span>} {...a11yProps(2)} />
                <Tab label={<span className={classes.tabRoot}>SMEs</span>} {...a11yProps(3)} />
            </Tabs>
        </div>
      </div>
     
      <div className="flex flex-col pt-3">

        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} dir={theme.direction}>
                <UsersTable/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Consultants/>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <Vendors/>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
                <SMEs/>
            </TabPanel>
        </SwipeableViews>
     
      </div>
      
    </div>
  );
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      >
      {value === index && (
          <Box p={4}>
          <Typography component={'span'}>{children}</Typography>
          </Box>
      )}
      </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
      backgroundColor: "#F6F6F6",
      width: "100%",
  },
  indicator: {
      backgroundColor: '#2BBF3A',
  },
  tabRoot: {
      flexGrow: 1,
      color: 'black',
      fontWeight: '600',
      lineHeight:"0.5rem",
      letterSpacing:"0.0355rem",
      textTransform: "none",
      '&:hover': {
          color:"black",
          opacity: 1,
          fontWeight:"bolder"
       },  
    }
}));

export default connect(null, {loadUserRoles,loadUsers,loadVendors})(React.memo(UserManagement));
