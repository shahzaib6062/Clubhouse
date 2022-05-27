import React from "react";
import { Link } from "react-router-dom";
import DraftsIcon from "@mui/icons-material/Drafts";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <div>
      <Link exact to="/explore">
        <SearchIcon />
      </Link>
      <Link exact to="/friends_invite">
        <DraftsIcon />
      </Link>
      <Link exact to="/upcoming">
        <CalendarMonthIcon />
      </Link>
      <Link exact to="/activity">
        <NotificationsNoneIcon />
      </Link>
      <Link exact to="/profile">
        <AccountCircleIcon />
      </Link>
    </div>
  );
}
