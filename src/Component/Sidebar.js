import * as React from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Add from "./addMobile";
import CardQuery from "./CardList";

//import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const [toOpen, setToOpen1] = React.useState(true);
  const [query, setQuery] = React.useState();

  const Change1 = async () => {
    const data = await axios.get("http://localhost:8080/query/list");
    setQuery(data.data.result);
    setToOpen1(true);
    setOpen(false);
  };

  const Change = (e) => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {/* {["Add Mobiles", "Starred"].map((text, index) => ( */}
          <ListItem onClick={Change} button key="Add Mobiles">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Mobiles" />
          </ListItem>
          <ListItem onClick={Change1} button key="Queries">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Queries" />
          </ListItem>
          {/* ))} */}
        </List>
        <Divider />
        <List>
          {/* {["All user"].map((text, index) => ( */}
          <ListItem button key="All user">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="All user" />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {open && <Add />}
        {toOpen && <CardQuery data={query} />}
      </Box>
    </Box>
  );
}
