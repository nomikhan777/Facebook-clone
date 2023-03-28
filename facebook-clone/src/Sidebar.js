import {
  EmojiFlags,
  ExpandCircleDownOutlined,
  VideoLibrary,
} from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { ExpandMoreOutlined } from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fsonnysangha&psig=AOvVaw2FLuzSFnkWArkfgNi5IOp7&ust=1680115796223000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOim95ul__0CFQAAAAAdAAAAABAI"
        title=" Sunny Bhai"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
