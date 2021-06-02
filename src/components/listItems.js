import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "antd";
const { SubMenu } = Menu;
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Link primary="Dashboard" to="/">
          <DashboardIcon />
        </Link>
      </ListItemIcon>
      <Link primary="Dashboard" to="/">
        Dashboard
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Link primary="KPIs" to="/KPI">
          <BarChartIcon />
        </Link>
      </ListItemIcon>
      <Link primary="KPIs" to="/KPI">
        <ListItemText primary="KPIs" to="/KPI" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Link primary="setup" to="/SetUp">
          <PeopleIcon />
        </Link>
      </ListItemIcon>
      <Link primary="setup" to="/SetUp">
        <ListItemText primary="Customers" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);

/* <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
