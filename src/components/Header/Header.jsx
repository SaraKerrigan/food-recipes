import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper grey darken-1">
        <Link to="/" className="brand-logo">
          Food
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
