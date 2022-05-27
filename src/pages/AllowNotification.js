import React from "react";
import { Link } from "react-router-dom";
import style from "../style/AllowNotification.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function AllowNotification() {
  return (
    <div>
      <Link exact to="/code_confirm" className={style.backBtn}>
        <ArrowBackIosNewIcon className="arrowBack" />
      </Link>
      <div className={style.AllowContainer}>
        <div className="d-flex flex-column text-center">
          <h1 className="mb-4">Last, Important step</h1>
          <h1 className="mb-3">
            Enable Notification to know when people are talking
          </h1>
          <div className={style.notificationContainer}>
            <div className="p-3">
              <h3>"Clubhouse" would like to send you Notification</h3>
              <p>Notification may include alerts,sounds and icons badges</p>
            </div>
            <div className={style.actionBtn}>
              <Link exact to="/home">
                Don't Allow
              </Link>
              <Link exact to="/home">
                Allow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
