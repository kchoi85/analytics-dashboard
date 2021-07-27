import React from "react";
import "./sidebar.css";

import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BarChartIcon from "@material-ui/icons/BarChart";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import BugReportIcon from "@material-ui/icons/BugReport";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>{" "}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermIdentityIcon className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <StorefrontIcon className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>{" "}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <ErrorOutlineIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>{" "}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <BugReportIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
