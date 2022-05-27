import React, { useState } from "react";
import style from "../style/PhoneConfirmation.module.css";
import PhoneInput from "react-phone-number-input";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link exact to="/" className={style.backBtn}>
        <ArrowBackIosNewIcon className="arrowBack" />
      </Link>
      <h1>Enter Your Phone Number</h1>
      <PhoneInput
        international
        defaultCountry="PK"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your Username, you're agreeing to our
        <span>Terms of services and privacy policy. </span>Thanks!
      </p>
      <Link
        exact
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next <ArrowForwardIosIcon />
      </Link>
    </div>
  );
}
