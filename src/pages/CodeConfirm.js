import React from "react";
import style from "../style/CodeConfirm.module.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function CodeConfirm() {
  return (
    <div className={style.CodeConfirmContainer}>
      <Link exact to="/phone_confirmation" className={style.backBtn}>
        <ArrowBackIosNewIcon className="arrowBack" />
      </Link>
      <div className="text-center">
        <h3
          style={{
            marginTop: "250px",
            width: "100%",
            maxWidth: "500px",
            marginBottom: "1em",
          }}
        >
          Enter the Code We just send you
        </h3>
        <input
          type="text"
          style={{
            border: "none",
            outline: "none",
            textAlign: "center",
            width: "100%",
          }}
        />
        <p className="mt-1">
          Did'nt receive it? <span>Tap to resend</span>
        </p>
        <Link
          exact
          to="/allow_notification"
          className="primaryBtn d-flex align-items-center text-align-center"
        >
          Next <ArrowForwardIosIcon />
        </Link>
      </div>
    </div>
  );
}
