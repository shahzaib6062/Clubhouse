import React from "react";
import style from "../style/Welcome.module.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className={style.welcomeContainer}>
      <h1>Welcome</h1>
      <div className={style.welcomeInfo}>
        <p>
          We are working very hard to bring Clubhouse to you as soon as possible
          after doing some final touch up ,we're adding people gradually to make
          sure nothing breaks
        </p>
        <p>
          You can join us by using the invite link from any existing user - or
          you can send us your username and we'll text you have a friend in the
          app who can let you in . we're very pleased that you're here and can't
          wait to have you join this wonderfull team.
        </p>
        <p>Shahzaib,Jahanzaib and the clubhouse team</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/phone_confirmation"
          className="primaryBtn d-flex align-items-center"
        >
          get Your username {""}
        </Link>
        <Link to="/">Have an invite text ? sign in </Link>
      </div>
    </div>
  );
}
