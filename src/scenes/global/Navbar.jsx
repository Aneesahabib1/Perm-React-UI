import * as React from 'react';
import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, ListItem, ListItemButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import StorageIcon from '@mui/icons-material/Storage';
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PeopleIcon from '@mui/icons-material/People';
import PaymentsIcon from '@mui/icons-material/Payments';
import BarChartIcon from '@mui/icons-material/BarChart';
import UsbIcon from '@mui/icons-material/Usb';

const Item = ({ title, to, icon, }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const {isCollapsed, setIsCollapsed} = useState(false);
  const [selected, setSelected]= useState("Dashboard");
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.blue[900],
      }}
      onClick={() => setSelected(title)}
      icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.white[500]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#5db0e9 !important",
        },
        "& .pro-menu-item.active": {
          color: "#a3a3a3 !important",
        },
      }} >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuIcon /> : undefined}  style={{
                margin: "10px 0 20px 0",
              color: colors.blue[900],
            }} >
            {!isCollapsed && (
              <Box
                display="flex" justifyContent="space-between"
     alignItems="center"
                ml="25px" > 
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                </IconButton>
                <MenuIcon />
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="left" alignItems="left">
                <img
                  alt="perm-logo"
                  width="200px"
                  height="100px"
                  src={`../../imgs/logo.jpeg`}
                  style={{ cursor: "pointer", borderRadius: "5%" }}
                />
              </Box> </Box>
          )}
          <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa', color:colors.blue[900], backgroundColor:colors.white[100]}} >
            <Item
              title="Dashboard" to="/" color='#0a1f2e'
              icon={<HomeOutlinedIcon />} selected={selected} 
              setSelected={setSelected} />
              </Box>
<Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
            <Box  sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa', color:colors.blue[900], backgroundColor:colors.white[100]}}>
            <SubMenu 
              title="Employee"  color='#0a1f2e'
              icon={<PeopleOutlinedIcon />} 
              selected={selected}   setSelected={setSelected}>
     <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
     <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>
              <MenuItem selected={selected}   setSelected={setSelected} icon={<AccountCircleIcon/>}>Profile</MenuItem>
              </Box>
              <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
             {/* <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>
              <MenuItem selected={selected}   setSelected={setSelected} icon={<StorageIcon/>} containerElement={<Link to="/index" />} >Master data</MenuItem>
          </Box>*/}
              <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
              <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>
              <MenuItem selected={selected}   setSelected={setSelected} icon={<EventNoteIcon />}>Attendance</MenuItem>
              </Box>
              <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
              <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>
              <MenuItem selected={selected}   setSelected={setSelected} icon={<AssignmentIcon />}>Task</MenuItem>
</Box>                 <span></span>
              </SubMenu>  </Box>
            <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
<Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>
            <Item
              title="Employee Master Data"  to="/index"
              icon={<PeopleOutlinedIcon />}
              selected={selected}   setSelected={setSelected}
            />
            </Box>
           {/* 
            <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
            <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>
            <Item
              title="Task Management"
              to="/Task Management"
              icon={<AssignmentIcon />}    selected={selected}  setSelected={setSelected}
            /></Box>
             <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
            <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>
            <Item
              title="Attendance"
              to="/Attendance"
              icon={<EventNoteIcon />}
              selected={selected}
              setSelected={setSelect />
            </Box>*/}
<Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
            <Box  sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa', 
            color:colors.blue[900], backgroundColor:colors.white[100]
            }}>
<SubMenu 
              title="Departments"  color='#0a1f2e'
              icon={<CorporateFareIcon />} 
              selected={selected}   setSelected={setSelected}>
     <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
     <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100], color:colors.blue[900]}}>
              <MenuItem selected={selected}   setSelected={setSelected} icon={<PeopleIcon/>}>Hr</MenuItem>
              </Box>
              <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
              <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100], color:colors.blue[900]}}>
              <MenuItem selected={selected}   setSelected={setSelected} icon={<UsbIcon/>} >IT</MenuItem>
          </Box>
              <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
              <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100], color:colors.blue[900]}}>
              <MenuItem selected={selected}   setSelected={setSelected} icon={<PaymentsIcon />}>Finance</MenuItem>
              </Box>
              <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
              <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100], color:colors.blue[900]}}>
              <MenuItem selected={selected}   setSelected={setSelected} icon={<BarChartIcon />}>Sales & Marketing</MenuItem>
</Box>                 <span></span>
              </SubMenu>
</Box>
{/*
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "25px 0 5px 20px" }}>   </Typography>
              <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>
            <Item 
              title=" Departments"
              to="/Departments"jhfdzrrdd
              icon={<CorporateFareIcon />}
              selected={selected}
          setSelected={setSelected} /></Box>*/}
               <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
              <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>
              <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />} />
            </Box>
            <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
            <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>
            <Item
              title="Feedback"
              to="/Feedback"
              icon={<FeedbackIcon />}
              selected={selected}
              setSelected={setSelected}/></Box>
<Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
<Typography></Typography>

<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>

            <Item
              title="Employee Count"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /></Box>
<Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
            <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>            <Item
              title="Task Count"
              to="/Pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /></Box>
            <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
            <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>            <Item
              title="Line Chart"
              to="/Line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /></Box>
            <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
            <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100]}}>            <Item
              title="Attendance"
              to="/bar2"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /></Box>
            <SubMenu 
              title="Chartd"  color='#0a1f2e'
              icon={<CorporateFareIcon />} 
              selected={selected}   setSelected={setSelected}>
     <Typography sx={{ m: "25px 0 5px 20px" }}>  </Typography>
     <Box sx={{borderRadius:'15px', boxShadow:'1px 2px 9px #d6ebfa',backgroundColor:colors.white[100], color:colors.blue[900]}}>
              <MenuItem selected={selected}   setSelected={setSelected} icon={<PeopleIcon/> }to="/bar">Barchart </MenuItem>
              </Box>
              </SubMenu>
        </Menu>
      </ProSidebar>
    </Box>  
  );};
export default Navbar;