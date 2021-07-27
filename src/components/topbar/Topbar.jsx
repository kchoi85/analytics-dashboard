import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">choida5-admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGSmk2SFBTatg/profile-displayphoto-shrink_800_800/0/1600131174930?e=1632960000&v=beta&t=bQdn_tUx8RLN7mkfn9M0FU7zW0OVtGQTzFwHshmodgU"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
